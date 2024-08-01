<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";
import { onMounted, onUnmounted } from "#imports";

const store = useModalStore();

function keydownListener(event: KeyboardEvent) {
  if (event.key === "Escape") store.closeModal();
}

onMounted(() => {
  document.addEventListener("keydown", keydownListener);
});

onUnmounted(() => {
  document.removeEventListener("keydown", keydownListener);
});

function handleClose(data?: any) {
  store.closeModal(data);
}
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
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

.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;

  z-index: 500;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);

  display: grid;
  place-items: center;
}
</style>
