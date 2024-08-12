<script setup lang="ts">
import { onMounted, ref, useI18n } from "#imports";
import BaseButton from "~/components/base/BaseButton.vue";

const { t } = useI18n();

//Types
interface IPosition {
  x: number;
  y: number;
}

type TDirection = "left" | "right" | "up" | "down";

const emit = defineEmits(["update-score", "update-high-score"]);

const board = ref();
//Game variables
const gridSizeX = ref(20);
const gridSizeY = ref(33);
const snake = ref<IPosition[]>([{ x: 10, y: 10 }]);
const food = ref<IPosition>({ x: 0, y: 0 });
food.value = generateFood();
const highScore = ref(0);
const direction = ref<TDirection>("right");
const gameInterval = ref();
const gameSpeedDelay = ref(200);
const gameStarted = ref(false);
const score = ref();
const gameIsOver = ref(false);

// draw game map, snake, food
function draw() {
  board.value.innerHTML = "";
  drawSnake();
  drawFood();
  updateScore();
}

function drawSnake() {
  snake.value.forEach((segment: IPosition) => {
    const snakeElement: HTMLElement = createGameElement(
      "div",
      `snake ${direction.value}`,
    );
    setPosition(snakeElement, segment);
    board.value.appendChild(snakeElement);
  });
}

// Creating snake or food cube
function createGameElement(tag: string, className: string): HTMLElement {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

//Set position of snake or food
function setPosition(element: HTMLElement, position: IPosition) {
  element.style.gridColumn = position.x.toString();
  element.style.gridRow = position.y.toString();
}

function drawFood() {
  if (gameStarted.value) {
    const foodElement: HTMLElement = createGameElement("div", "food");
    setPosition(foodElement, food.value);
    board.value.appendChild(foodElement);
  }
}

function isPositionOnSnake(position: IPosition): boolean {
  return snake.value.some(
    (segment) => segment.x === position.x && segment.y === position.y,
  );
}

//Generate food
function generateFood(): IPosition {
  let position: IPosition;
  //Food must not generate on snake position and must be in empty spaces
  do {
    const x = Math.floor(Math.random() * gridSizeX.value + 1);
    const y = Math.floor(Math.random() * gridSizeY.value + 1);
    position = { x, y };
  } while (isPositionOnSnake(position));

  return position;
}

function updateScore() {
  score.value = snake.value.length - 1;
  emit("update-score", score.value);
}

//Moving snake
function move() {
  const head: IPosition = { ...snake.value[0] };
  switch (direction.value) {
    case "up":
      head.y--;
      break;
    case "right":
      head.x++;
      break;
    case "down":
      head.y++;
      break;
    case "left":
      head.x--;
      break;
  }
  snake.value.unshift(head);
  if (head.x === food.value.x && head.y === food.value.y) {
    food.value = generateFood();
    increaseSpeed();
    clearInterval(gameInterval.value);
    gameInterval.value = setInterval(() => {
      move();
      checkCollision();
      draw();
    }, gameSpeedDelay.value);
  } else {
    snake.value.pop();
  }
}

function checkCollision() {
  const head = snake.value[0];
  if (
    head.x < 1 ||
    head.x > gridSizeX.value ||
    head.y < 1 ||
    head.y > gridSizeY.value
  ) {
    resetGame();
  }
  for (let i = 1; i < snake.value.length; i++) {
    if (head.x === snake.value[i].x && head.y === snake.value[i].y) {
      resetGame();
    }
  }
}

function increaseSpeed() {
  if (gameSpeedDelay.value > 150) {
    gameSpeedDelay.value -= 5;
  } else if (gameSpeedDelay.value > 100) {
    gameSpeedDelay.value -= 3;
  } else if (gameSpeedDelay.value > 50) {
    gameSpeedDelay.value -= 2;
  } else if (gameSpeedDelay.value > 25) {
    gameSpeedDelay.value -= 1;
  }
}

function resetGame() {
  updateHighScore();
  stopGame();
  snake.value = [{ x: 10, y: 10 }];
  food.value = generateFood();
  direction.value = "right";
  gameSpeedDelay.value = 200;
  updateScore();
}

function updateHighScore() {
  const currentScore = snake.value.length - 1;
  if (currentScore > highScore.value) {
    highScore.value = currentScore;
  }
  emit("update-high-score", highScore.value);
}

function stopGame() {
  clearInterval(gameInterval.value);
  gameIsOver.value = true;
  gameStarted.value = false;
}

function startGame() {
  gameStarted.value = true;
  gameIsOver.value = false;
  gameInterval.value = setInterval(() => {
    move();
    checkCollision();
    draw();
  }, gameSpeedDelay.value);
}

//Keypress Event listeners
function handleKeyPress(event: KeyboardEvent) {
  if (
    (!gameStarted.value && event.code === "Space") ||
    (!gameStarted.value && event.key === " ")
  ) {
    //User pressed Space
    startGame();
  } else {
    switch (event.key) {
      case "ArrowUp":
        if (direction.value !== "down") {
          direction.value = "up";
        }
        break;
      case "ArrowDown":
        if (direction.value !== "up") {
          direction.value = "down";
        }
        break;
      case "ArrowRight":
        if (direction.value !== "left") {
          direction.value = "right";
        }
        break;
      case "ArrowLeft":
        if (direction.value !== "right") {
          direction.value = "left";
        }
        break;
    }
  }
}

onMounted(() => {
  document.addEventListener("keydown", handleKeyPress);
});
</script>

<template>
  <div class="game-wrapper">
    <div class="game-board" ref="board"></div>
    <BaseButton
      v-if="!gameStarted"
      @click="startGame"
      class="start-btn"
      mode="orange"
    >
      {{ t("mainPage.startGame") }}
    </BaseButton>
    <div v-if="gameIsOver" class="game-over">
      {{ t("mainPage.gameOver") }}
    </div>
    <div v-if="!gameStarted && !gameIsOver" class="snake-game-title">
      {{ t("mainPage.snakeGame") }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.game-wrapper {
  @apply h-[396px] w-[240px] min-w-[240px] relative;

  .start-btn {
    @apply absolute left-1/2 -translate-x-1/2 bottom-8 w-[124px];
  }

  .game-over,
  .snake-game-title {
    @apply absolute w-full top-1/2 -translate-y-1/2 h-12 bg-primary-300/[84%] flex items-center justify-center text-accent-2 text-2xl;
  }
}

.game-board {
  @apply w-full h-full bg-primary-300/[84%] place-items-center grid;
  grid-template-columns: repeat(20, 12px);
  grid-template-rows: repeat(33, 12px);
}

:deep(.snake) {
  @apply bg-accent-2 min-w-[12px] min-h-[12px];
  &:first-child {
    //&.up {
    //  @apply rounded-tr rounded-tl;
    //}
    //
    //&.down {
    //  @apply rounded-br rounded-bl;
    //}
    //
    //&.right {
    //  @apply rounded-tr rounded-br;
    //}
    //
    //&.left {
    //  @apply rounded-tl rounded-bl;
    //}
  }
}

:deep(.food) {
  @apply bg-accent-2 rounded-full h-2 w-2 relative;
  &:after {
    content: " ";
    @apply absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-accent-2/[40%];
  }
}
</style>
