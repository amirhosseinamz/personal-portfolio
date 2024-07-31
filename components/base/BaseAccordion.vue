<script setup lang="ts">
import { ref, onMounted } from "#imports";

interface PropsFace {
  title: string;
  openedDefault: boolean;
  theme?: "dark" | "light";
}

const props = withDefaults(defineProps<PropsFace>(), {
  openedDefault: false,
  theme: "dark",
});
const accordionIsOpen = ref(false);

const toggleAccordion = () => {
  accordionIsOpen.value = !accordionIsOpen.value;
};

onMounted(() => {
  accordionIsOpen.value = props.openedDefault;
});
</script>

<template>
  <div class="accordion-wrapper" :class="[`theme-${props.theme}`]">
    <div
      class="accordion"
      :class="{ active: accordionIsOpen }"
      ref="accordion"
      @click="toggleAccordion"
    >
      <div class="arrow"></div>
      {{ title }}
    </div>
    <div
      class="accordion-content"
      :style="{ maxHeight: accordionIsOpen ? '-webkit-fill-available' : '' }"
    >
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.accordion-wrapper {
  @apply w-full h-fit;
  .accordion {
    @apply text-base text-white relative m-0 cursor-pointer ps-[14px] transition-all duration-[0.1s] flex items-center h-10 border-line-1;

    .arrow {
      @apply w-0 h-0 rotate-90 me-2 transition-all;
      border-style: solid;
      border-width: 0 4px 6px 4px;
      border-color: transparent transparent #ffffff transparent;
    }

    &.active {
      .arrow {
        @apply rotate-180;
      }
    }
  }

  .accordion-content {
    @apply px-4 max-h-0 overflow-hidden transition-[max-height] duration-[0.1s] ease-in-out;
  }

  &.theme-dark {
    .accordion {
      @apply bg-primary-300 border-b;
    }
  }

  &.theme-light {
    .accordion {
      @apply bg-line-1 border-b-0;
    }
  }
}
</style>
