<template>
  <div :class="props.wrapperClass">
    <div :class="['text-wrapper', props.class]">
      <span ref="textTag" :class="['text', textClass]" v-text="displayedText" />
    </div>
    <slot v-if="finishEffect" name="content" />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from "#imports";

interface IProps {
  text: string;
  textClass?: any;
  endDelay?: number;
  wrapperClass?: string;
  class?: string;
  typeDelay: number;
  hideTypeLineAfter?: boolean;
  startAfter?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  typeDelay: 200,
  hideTypeLineAfter: false,
  startAfter: 0,
});

const fullText = props.text;
const displayedText = ref("");
const finishEffect = ref(false);
const textTag = ref();

const typeEffect = () => {
  let index = 0;
  const typingInterval = setInterval(() => {
    if (index < fullText.length) {
      displayedText.value += fullText[index];
      index++;
    } else {
      setTimeout(() => {
        clearInterval(typingInterval);
        finishEffect.value = true;
        onBeforeEnd();
      }, props.endDelay || 0);
    }
  }, props.typeDelay);
};

function onBeforeEnd() {
  if (props.hideTypeLineAfter) {
    textTag.value.classList.add("hide-line");
  }
}

onMounted(() => {
  setTimeout(() => {
    typeEffect();
  }, props.startAfter);
});
</script>
<style lang="scss" scoped>
.text-wrapper {
  .text {
    @apply relative;
    &:after {
      content: " ";
      animation: typeLine 800ms infinite;
      @apply absolute w-[3px] h-full bg-secondary-1 -end-1 top-1/2 -translate-y-1/2;
    }

    &.hide-line {
      &:after {
        @apply hidden;
      }
    }
  }
}

@keyframes typeLine {
  0% {
    @apply opacity-0;
  }
  50% {
    @apply opacity-100;
  }
  100% {
    @apply opacity-0;
  }
}
</style>
