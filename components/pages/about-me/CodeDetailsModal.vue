<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";
import BaseButton from "~/components/base/BaseButton.vue";
import BaseIcon from "~/components/base/base-icon/BaseIcon.vue";

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
        <BaseIcon name="close-modal" />
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
  transform: translateY(0);

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
