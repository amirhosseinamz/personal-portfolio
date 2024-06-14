<script setup lang="ts">

import KeyboardButtons from "~/components/pages/index/KeyboardButtons.vue";
import BaseButton from "~/components/base/BaseButton.vue";
</script>

<template>
  <div class="gamepad">
    <div class="game"></div>
    <div class="flex flex-col justify-between w-full h-full">
      <div>
        <div class="arrow-keys">
          <div class="flex flex-col gap-1 mb-4">
          <span class="txt">
            // use keyboard
          </span>
            <span class="txt">
            // arrows to play
          </span>
          </div>
          <KeyboardButtons/>
        </div>

        <div class="mt-4">
          <span class="text-white text-sm ps-4">
            // food left
          </span>
          <div class="foods">
            <div class="foods_item"></div>
            <div class="foods_item"></div>
            <div class="foods_item"></div>
            <div class="foods_item"></div>
            <div class="foods_item"></div>
            <div class="foods_item"></div>
            <div class="foods_item"></div>
            <div class="foods_item"></div>
            <div class="foods_item opacity-30"></div>
            <div class="foods_item opacity-30"></div>
          </div>
        </div>
      </div>
      <BaseButton class="ms-auto">
        skip
      </BaseButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gamepad {
  @apply w-[510px] rounded-lg h-[475px] p-[34px] border border-[#0c1616] flex items-start gap-6 relative z-[2];
  background: rgb(23, 85, 83);
  background: linear-gradient(202deg, rgba(23, 85, 83, 1) 0%, rgba(67, 217, 173, 0.13489145658263302) 50%);

  .game {
    @apply h-full w-[238px] min-w-[238px] rounded-lg bg-primary-300/[84%];
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
</style>