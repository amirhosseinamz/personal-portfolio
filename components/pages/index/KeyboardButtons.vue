<script setup lang="ts">

</script>

<template>
  <div class="keyboard-buttons">
    <div class="btn">
      <div class="triangle up"></div>
    </div>
    <div class="btn">
      <div class="triangle left"></div>
    </div>
    <div class="btn">
      <div class="triangle bottom"></div>
    </div>
    <div class="btn">
      <div class="triangle right"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.keyboard-buttons {
  @apply grid grid-cols-3 grid-rows-2 gap-1;
  .btn {
    @apply bg-primary-450 border border-line-1 flex items-center justify-center col-span-1 h-7 rounded-lg;
    grid-row: 2/3;

    &:first-child {
      grid-column: 2/3;
      grid-row: 1/2;
    }
  }
}

.triangle {
  @apply w-0 h-0 border-solid rotate-0;
  border-width: 0 4.5px 6px 4.5px;
  border-color: transparent transparent #FFFFFF transparent;

  &.right {
    @apply rotate-90;
  }

  &.left {
    @apply -rotate-90;
  }

  &.bottom {
    @apply rotate-180;
  }
}
</style>