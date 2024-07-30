<script setup lang="ts">
import { useToasterStore, TToastStatus } from "~/stores/useToasterStore";
import { TIconName } from "~/components/base/BaseIcon.vue";
import BaseIcon from "~/components/base/BaseIcon.vue";

const toastStore = useToasterStore();

const toastClassMap: Record<TToastStatus, string> = {
  warning: "warning",
  error: "error",
  success: "success",
};

const toastIconMap: Record<TToastStatus, TIconName> = {
  error: "toast-error",
  warning: "toast-warning",
  success: "toast-success",
};
</script>

<template>
  <Teleport to="body">
    <Transition name="toast">
      <ul v-if="toastStore.toasts.length" class="toaster__wrapper">
        <TransitionGroup name="toast" tag="ul">
          <li
            v-for="toast in toastStore.toasts"
            :class="['toaster__inner', toastClassMap[toast.status]]"
            :key="toast.text"
          >
            <BaseIcon
              class="toaster__inner-icon"
              :name="toastIconMap[toast.status]"
            />
            <span class="toaster__inner-text">
              {{ toast.text }}
            </span>
          </li>
        </TransitionGroup>
      </ul>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.toast-enter-from,
.toast-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}

.toast-enter-active,
.toast-leave-active {
  transition: all 0.25s ease;
}

.toaster {
  &__wrapper {
    @apply fixed top-[3%] start-[4%] z-[100];
  }

  &__inner {
    @apply flex items-center gap-3 bg-primary-300 rounded border w-[320px] p-3 mb-2;

    &-icon {
      aspect-ratio: 1/1;
    }

    &-text {
      @apply text-base font-medium text-white;
    }

    &.success {
      @apply border-accent-2;
    }

    &.warning {
      @apply border-accent-1;
    }

    &.error {
      @apply border-accent-3;
    }
  }
}
</style>
