<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";
import BaseButton from "~/components/base/BaseButton.vue";

const modalStore = useModalStore();
const props = defineProps<{
  description: string;
}>();
</script>

<template>
  <div class="code-details-modal modal_mobile-mode">
    <div class="head">
      <div>{{ $t("aboutMe.codeSnippet.codeDetails") }}</div>
      <div class="close" @click="modalStore.closeModal()">
        <svg
          width="14"
          height="14"
          viewBox="0 0 11 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.34771 3.71879L9.06021 0.00628662L10.1207 1.06679L6.40821 4.77929L10.1207 8.49179L9.06021 9.55229L5.34771 5.83979L1.63521 9.55229L0.574707 8.49179L4.28721 4.77929L0.574707 1.06679L1.63521 0.00628662L5.34771 3.71879Z"
            fill="#607B96"
          />
        </svg>
      </div>
    </div>
    <div class="content">
      {{ props.description }}

      <div class="w-full flex justify-center mt-6">
        <BaseButton
          class="!w-[80px]"
          mode="orange"
          @click="modalStore.closeModal()"
        >
          ok
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-details-modal {
  @apply w-[500px] h-auto bg-primary-300 border border-line-1 rounded-lg;
  .head {
    @apply flex items-center justify-between w-full h-12 border-b border-line-1 px-4;
    .close {
      @apply cursor-pointer;
    }
  }

  .content {
    @apply p-4;
  }
}
</style>
