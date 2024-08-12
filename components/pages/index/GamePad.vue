<script setup lang="ts">
import KeyboardButtons from "~/components/pages/index/KeyboardButtons.vue";
import SnakeGame from "~/components/pages/index/SnakeGame.vue";
import { onMounted, ref } from "#imports";
import BaseIcon from "~/components/base/base-icon/BaseIcon.vue";

const score = ref(0);
const highScore = ref<string | number>(0);

function updateScore(data: number) {
  score.value = data;
}

function updateHighScore(data: number) {
  if (data > +highScore.value) {
    highScore.value = data;
    localStorage.setItem("highScore", highScore.value.toString());
  }
}

onMounted(() => {
  highScore.value = localStorage.getItem("highScore") || 0;
});
</script>

<template>
  <div class="gamepad">
    <SnakeGame
      @update-score="updateScore"
      @update-high-score="updateHighScore"
    />
    <div class="flex flex-col justify-between w-full h-full">
      <div>
        <div class="arrow-keys">
          <div class="flex flex-col gap-1 mb-4">
            <span class="txt"> // {{ $t("mainPage.game.useKeyboard") }} </span>
            <span class="txt"> // {{ $t("mainPage.game.arrowsToPlay") }} </span>
          </div>
          <KeyboardButtons />
        </div>

        <div class="mt-4">
          <span class="text-white text-sm ps-4">
            // {{ $t("mainPage.game.score") }}: {{ score }}</span
          >
          <!--          <div class="foods">-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item"></div>-->
          <!--            <div class="foods_item opacity-30"></div>-->
          <!--            <div class="foods_item opacity-30"></div>-->
          <!--          </div>-->
        </div>
        <div class="mt-2">
          <span class="text-white text-sm ps-4">
            // {{ $t("mainPage.game.highScore") }}: {{ highScore }}</span
          >
        </div>
      </div>
      <!--      <div class="text-white">Press start button or SPACE key to start</div>-->
      <!--      <BaseButton class="ms-auto"> skip</BaseButton>-->
    </div>
    <div class="screw-1">
      <BaseIcon name="screw-1" />
    </div>
    <div class="screw-2">
      <BaseIcon name="screw-1" />
    </div>
    <div class="screw-3">
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.460938 5.72577L5.99951 1.13638M0.460938 1.13638L5.99951 5.72577"
          stroke="#093430"
        />
      </svg>
    </div>
    <div class="screw-4">
      <svg
        width="7"
        height="7"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.960938 5.72577L6.49951 1.13638M0.960938 1.13638L6.49951 5.72577"
          stroke="#163355"
        />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gamepad {
  @apply w-[510px] rounded-lg h-[466px] p-[34px] max-xl:p-5 border border-[#0c1616] flex items-start gap-6 max-xl:gap-4 relative z-[2];
  background: rgb(23, 85, 83);
  background: linear-gradient(
    202deg,
    rgba(23, 85, 83, 1) 0%,
    rgba(67, 217, 173, 0.13489145658263302) 50%
  );

  .game {
    @apply h-[400px] w-[240px] min-w-[240px] bg-primary-300/[84%];
  }

  .arrow-keys {
    @apply rounded-lg bg-[#011423]/[0.19] pt-4 pb-3 px-[14px];
    .txt {
      @apply text-white text-sm;
    }
  }

  .foods {
    @apply grid grid-cols-5 gap-5 mt-3 w-4/5 ps-4;
    &_item {
      @apply w-2 h-2 rounded-full bg-accent-2 relative;
      &:before {
        content: " ";
        @apply absolute w-[14.6px] h-[14.6px] rounded-full bg-accent-2/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
      }

      &:after {
        content: " ";
        @apply absolute w-[20.6px] h-[20.6px] rounded-full bg-accent-2/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2;
      }
    }
  }
}

.screw {
  &-1,
  &-2,
  &-3,
  &-4 {
    @apply absolute w-[13px] h-[13px] rounded-full flex items-center justify-center;
    box-shadow:
      2px 2px 4px 0 #0d4341,
      inset 0 1px 2px 0 #1f8177;
    background: rgb(25, 108, 106);
    background: radial-gradient(
      circle,
      rgba(25, 108, 106, 1) 15%,
      rgba(17, 75, 74, 1) 100%
    );
  }

  &-1 {
    @apply start-3 max-xl:start-1 top-3 max-xl:top-1;
  }

  &-2 {
    @apply end-3 max-xl:end-1 top-3 max-xl:top-1;
  }

  &-3 {
    @apply start-3 max-xl:start-1 bottom-3 max-xl:bottom-1 border border-[#093430];
    box-shadow:
      2px 2px 4px 0 #092d32,
      inset 0 1px 2px 0 #16645c;
    background: rgb(22, 76, 81);
    background: radial-gradient(
      circle,
      rgba(22, 76, 81, 1) 15%,
      rgba(13, 58, 64, 1) 100%
    );
  }

  &-4 {
    @apply end-3 max-xl:end-1 bottom-3 max-xl:bottom-1;
    box-shadow:
      2px 2px 4px 0 #122c4e,
      inset 0 1px 2px 0 #2c588d;
    background: rgb(35, 75, 124);
    background: radial-gradient(
      circle,
      rgba(35, 75, 124, 1) 15%,
      rgba(18, 46, 79, 1) 100%
    );
  }
}
</style>
