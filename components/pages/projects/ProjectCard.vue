<script setup lang="ts">
import BaseButton from "~/components/base/BaseButton.vue";
import { ProjectFace } from "~/types/projects/projects";
import useModalStore from "~/stores/useModalStore";
import ProjectDetailsModal from "~/components/pages/projects/ProjectDetailsModal.vue";
import { nextTick, onMounted } from "#imports";

const modalStore = useModalStore();

interface PropsFace {
  data: ProjectFace;
  counter: number;
}

const props = withDefaults(defineProps<PropsFace>(), {});

function openDetailsModal() {
  modalStore.openModal({
    component: ProjectDetailsModal,
    props: {
      images: props.data.gallery,
      description: props.data.description,
      title: props.data.title,
    },
  });
}

onMounted(async () => {
  // await nextTick();
});
</script>

<template>
  <div class="flex flex-col gap-[14px] w-full sm:max-w-[380px]">
    <div class="flex items-center">
      <span class="text-[#5565E8] text-base me-2.5 whitespace-nowrap"
        >Project {{ props.counter }}</span
      >
      <span class="text-secondary-1 text-base whitespace-nowrap"
        >// {{ props.data.title }}</span
      >
    </div>

    <div class="card">
      <div class="img">
        <img :src="props.data.img" :alt="props.data.title" />
      </div>
      <div class="content">
        <div class="description">
          <p class="ellipsis">
            {{ props.data.description }}
          </p>
        </div>
        <BaseButton
          mode="dark"
          class="max-2xl:text-base"
          @click="openDetailsModal"
          >view-project
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply rounded-2xl flex flex-col border border-line-1 bg-primary-400 overflow-hidden;
  .img {
    @apply h-[145px] w-full rounded-tl-2xl rounded-tr-2xl overflow-hidden;
    img {
      @apply w-full h-full object-cover rounded-tl-2xl rounded-tr-2xl;
    }
  }

  .content {
    @apply p-6 max-2xl:p-5;
    .description {
      @apply text-lg max-2xl:text-base mb-5;
    }
  }
}

.ellipsis {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5;
  max-height: calc(1.5em * 3);
}
</style>
