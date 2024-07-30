<script setup lang="ts">
import BaseSpinner from "~/components/base/BaseSpinner.vue";
import { ref } from "#imports";

interface PropsFace {
  mode?: "outline" | "dark" | "orange";
  type?: "button" | "submit";
  loading?: boolean;
}

const props = withDefaults(defineProps<PropsFace>(), {
  mode: "outline",
  type: "button",
  loading: false,
});
const emit = defineEmits(["click"]);
</script>

<template>
  <button
    class="base-button"
    :class="[mode]"
    :type="props.type"
    @click="emit('click')"
  >
    <slot v-if="!props.loading"></slot>
    <BaseSpinner v-else />
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
