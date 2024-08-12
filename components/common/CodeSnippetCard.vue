<script setup lang="ts">
import CodeHighlight from "~/components/base/CodeHighlight.vue";
import CodeDetailsModal from "~/components/pages/about-me/CodeDetailsModal.vue";
import { ref } from "#imports";
import useModalStore from "~/stores/useModalStore";
import { ICodeSnippet } from "~/types/about-me/about-me";
import BaseIcon from "~/components/base/base-icon/BaseIcon.vue";

const modalStore = useModalStore();

interface IProps {
  data: ICodeSnippet;
}

const props = withDefaults(defineProps<IProps>(), {});

function openDetails() {
  modalStore.openModal({
    component: CodeDetailsModal,
    props: { description: props.data.description },
  });
}
</script>

<template>
  <div class="code-snippet-card-container">
    <div class="info">
      <div class="start-section">
        <div class="img">
          <img :src="data.img" alt="Avatar" />
        </div>
        <div class="flex flex-col gap-[2px]">
          <span class="user-name"> @{{ data.username }} </span>
          <span class="time">
            {{ $t("aboutMe.createdIn") }} {{ data.createTime }}
          </span>
        </div>
      </div>
      <div class="end-section">
        <div class="flex items-center gap-[6px]">
          <BaseIcon name="code-details" />
          <span
            class="text-sm text-secondary-1 cursor-pointer"
            @click="openDetails"
          >
            {{ $t("details") }}
          </span>
        </div>
      </div>
    </div>
    <div class="code">
      <CodeHighlight
        :code="props.data.code"
        language="javascript"
        code-class="code-text"
      ></CodeHighlight>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-snippet-card-container {
  @apply flex flex-col gap-3 w-full pb-10;
  .info {
    @apply flex items-start justify-between w-full;
    .start-section {
      @apply flex items-center gap-2.5;
      .img {
        @apply w-9 min-w-[36px] h-9 rounded-full;
        img {
          @apply w-full h-full rounded-full;
        }
      }

      .user-name {
        @apply text-[#5565E8] text-sm;
      }

      .time {
        @apply text-secondary-1 text-xs;
      }
    }
  }

  .code {
    @apply rounded max-md:rounded-xl bg-primary-400 border border-line-1;
  }

  &:deep(.code-text) {
    @apply -mt-6 max-md:-mt-4 ms-6 max-md:ms-4;
    padding-bottom: 1rem !important;
  }
}
</style>
