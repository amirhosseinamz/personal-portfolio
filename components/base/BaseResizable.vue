<template>
  <div ref="container" class="resizable-container">
    <div ref="leftPane" class="left-pane" :style="{width: startPaneDefaultWidth}">
      <slot name="left"></slot>
    </div>
    <div ref="rightPane" class="right-pane" :style="{width: endPaneDefaultWidth}">
      <div ref="handler" class="resize-handler" @mousedown="startResize"></div>

      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref, onMounted, onBeforeUnmount} from 'vue';

interface PropsFace {
  startPaneDefaultWidth: string,
  endPaneDefaultWidth: string,
  startPaneMinWidth: number,
  endPaneMinWidth: number,
}

const props = withDefaults(defineProps<PropsFace>(), {
  startPaneDefaultWidth: '50%',
  endPaneDefaultWidth: '50%',
  startPaneMinWidth: 100,
  endPaneMinWidth: 100,
});

const container = ref<HTMLDivElement | null>(null);
const leftPane = ref<HTMLDivElement | null>(null);
const rightPane = ref<HTMLDivElement | null>(null);
const handler = ref<HTMLDivElement | null>(null);

let isResizing = false;

const startResize = (event: MouseEvent) => {
  isResizing = true;
  document.addEventListener('mousemove', handleResize);
  document.addEventListener('mouseup', stopResize);
};

const handleResize = (event: MouseEvent) => {
  if (!isResizing || !container.value || !leftPane.value || !rightPane.value) return;

  const containerRect = container.value.getBoundingClientRect();
  const newLeftWidth = event.clientX - containerRect.left;
  const newRightWidth = containerRect.width - newLeftWidth;

  if (newLeftWidth > props.startPaneMinWidth && newRightWidth > props.endPaneMinWidth) {
    leftPane.value.style.width = `${newLeftWidth}px`;
    rightPane.value.style.width = `${newRightWidth}px`;
  }
};

const stopResize = () => {
  isResizing = false;
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', stopResize);
};

onMounted(() => {

});

onBeforeUnmount(() => {
  document.removeEventListener('mousemove', handleResize);
  document.removeEventListener('mouseup', stopResize);
});
</script>

<style scoped>
.resizable-container {
  @apply flex h-full w-full relative;
}

.left-pane,
.right-pane {
  @apply overflow-auto relative;
}

.resize-handler {
  @apply absolute start-0 top-0 w-3 h-full cursor-ew-resize bg-transparent -translate-x-1/2;
}
</style>
