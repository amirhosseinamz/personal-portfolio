<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";
import { computed, onMounted, onUnmounted, ref } from "#imports";
import { BreakpointsEnum } from "~/enums/breakpoints.enum";
import { ComputedRef } from "vue";

const store = useModalStore();

const windowWidth = ref();
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

function keydownListener(event: KeyboardEvent) {
  if (event.key === "Escape") store.closeModal();
}

onMounted(() => {
  document.addEventListener("keydown", keydownListener);
  window.addEventListener("resize", handleResize);
  handleResize();
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydownListener);
  window.removeEventListener("resize", handleResize);
});

function handleClose(data?: any) {
  store.closeModal(data);
}

const modalAnimation = computed(() => {
  return windowWidth.value > BreakpointsEnum.LG
    ? "modal-fade"
    : "bottom-to-top";
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="store.modalState?.component" class="backdrop"></div>
    </Transition>
    <Transition :name="modalAnimation">
      <div
        v-if="store.modalState?.component"
        class="modal-wrapper"
        @click.self="handleClose"
        aria-modal="true"
        role="dialog"
        tabindex="-1"
      >
        <Component
          :is="store.modalState?.component"
          v-bind="store.modalState?.props"
        ></Component>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}

.bottom-to-top-enter-from,
.bottom-to-top-leave-to {
  transform: translateY(100%);
}

.bottom-to-top-enter-active,
.bottom-to-top-leave-active {
  transition: 0.25s ease all;
}

.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 500;
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
}

.backdrop {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 499;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
}
</style>
