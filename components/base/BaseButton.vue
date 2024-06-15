<script setup lang="ts">
interface PropsFace {
  mode?: 'outline' | 'dark' | 'orange';
}

const props = withDefaults(defineProps<PropsFace>(), {
  mode: 'outline',
});
const emit = defineEmits(['click']);
</script>

<template>
  <button class="base-button" :class="[mode]" type="button" @click="emit('click')">
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
.base-button {
  @apply rounded-lg px-[14px] h-[38px] flex items-center justify-center w-max;
  &.outline {
    @apply border border-white text-white bg-transparent;
  }

  &.orange {
    @apply bg-accent-1 text-primary-500;
  }

  &.dark {
    @apply bg-primary-100 text-white;
  }
}
</style>