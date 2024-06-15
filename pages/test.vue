<template>
  <div class="game-container">
    <canvas ref="gameCanvas" :width="canvasSize" :height="canvasSize"></canvas>
    <div class="score">Score: {{ score }}</div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, nextTick} from 'vue';

interface Position {
  x: number;
  y: number;
}

enum Direction {
  UP,
  DOWN,
  LEFT,
  RIGHT
}

export default defineComponent({
  name: 'SnakeGame',
  setup() {
    const canvasSize = 400;
    const tileSize = 20;
    const canvas = ref<HTMLCanvasElement | null>(null);
    const context = ref<CanvasRenderingContext2D | null>(null);

    let snake: Position[] = [{x: 10, y: 10}];
    let direction = Direction.RIGHT;
    let food: Position = {x: 15, y: 15};
    let score = ref(0);
    let gameInterval: number;

    const draw = () => {
      if (context.value) {
        // Clear the canvas
        context.value.fillStyle = 'black';
        context.value.fillRect(0, 0, canvasSize, canvasSize);

        // Draw snake
        context.value.fillStyle = 'lime';
        snake.forEach(segment => {
          context.value?.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
        });

        // Draw food
        context.value.fillStyle = 'red';
        context.value.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
      }
    };

    const update = () => {
      const head = {...snake[0]};
      switch (direction) {
        case Direction.UP:
          head.y -= 1;
          break;
        case Direction.DOWN:
          head.y += 1;
          break;
        case Direction.LEFT:
          head.x -= 1;
          break;
        case Direction.RIGHT:
          head.x += 1;
          break;
      }

      snake.unshift(head);

      // Check if snake eats the food
      if (head.x === food.x && head.y === food.y) {
        score.value += 1;
        placeFood();
      } else {
        snake.pop();
      }

      // Check for collisions
      if (checkCollision(head)) {
        alert('Game Over');
        clearInterval(gameInterval);
      }

      draw();
    };

    const placeFood = () => {
      food = {
        x: Math.floor(Math.random() * (canvasSize / tileSize)),
        y: Math.floor(Math.random() * (canvasSize / tileSize))
      };
    };

    const checkCollision = (head: Position) => {
      if (
          head.x < 0 ||
          head.x >= canvasSize / tileSize ||
          head.y < 0 ||
          head.y >= canvasSize / tileSize
      ) {
        return true;
      }

      for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          return true;
        }
      }

      return false;
    };

    const changeDirection = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowUp':
          if (direction !== Direction.DOWN) direction = Direction.UP;
          break;
        case 'ArrowDown':
          if (direction !== Direction.UP) direction = Direction.DOWN;
          break;
        case 'ArrowLeft':
          if (direction !== Direction.RIGHT) direction = Direction.LEFT;
          break;
        case 'ArrowRight':
          if (direction !== Direction.LEFT) direction = Direction.RIGHT;
          break;
      }
    };

    onMounted(async () => {
      await nextTick();
      if (canvas.value) {
        context.value = canvas.value.getContext('2d');
        if (context.value) {
          // Add debugging logs
          console.log('Canvas context obtained');
        } else {
          console.error('Failed to obtain canvas context');
        }
        document.addEventListener('keydown', changeDirection);
        let gameInterval = setInterval(update, 100);
        draw();
      } else {
        console.error('Canvas element is not available');
      }
    });

    return {
      canvas,
      canvasSize,
      score
    };
  }
});
</script>

<style scoped>
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.score {
  margin-top: 10px;
  font-size: 24px;
  color: white;
}
</style>
