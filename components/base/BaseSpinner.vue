<script setup lang="ts">
interface PropsFace {
  size: "sm" | "md" | "lg";
}

const props = withDefaults(defineProps<PropsFace>(), {
  size: "sm",
});
</script>

<template>
  <span class="loader" :class="props.size"></span>
</template>

<style scoped lang="scss">
.loader {
  @apply border border-white border-b-transparent rounded-full inline-block box-border;
  animation: rotation 1s linear infinite;

  &.sm {
    @apply w-5 h-5 border-[2px];
  }

  &.md {
    @apply w-8 h-8 border-[3px];
  }
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
