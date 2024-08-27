<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";
import BaseIcon from "~/components/base/base-icon/BaseIcon.vue";
import FsLightbox from "fslightbox-vue/v3";
import { ref } from "#imports";

const modalStore = useModalStore();

interface IImage {
  id: number;
  thumbnail: string;
  largeImage: string;
  alt: string;
}

interface IProps {
  description: string;
  images: IImage[];
  title: string;
}

const props = defineProps<IProps>();

//Gallery

const slide = ref(0);
const toggler = ref(false);

interface Image {
  src: string;
  thumbnail: string;
  alt: string;
}

function openLightboxOnSlide(number: number) {
  slide.value = number;
  toggler.value = !toggler.value;
}

const imageSources = props.images.map((image) => image.largeImage);
const lightboxOptions = {};
</script>

<template>
  <div class="project-details-modal modal_mobile-mode">
    <div class="head">
      <span class="font-medium text-white">{{ props.title }}</span>
      <div class="close" @click="modalStore.closeModal()">
        <BaseIcon name="close-modal" />
      </div>
    </div>
    <div class="content">
      <div
        class="max-h-[300px] max-sm:max-h-[250px] pe-4 overflow-y-auto"
        :class="{ '!max-h-[500px]': props.images.length === 0 }"
        v-html="props.description"
      ></div>
      <div v-if="props.images.length > 0" class="flex flex-col gap-4 mt-6">
        <span class="font-medium text-base text-white">
          {{ $t("projects.images") }}
        </span>
        <FsLightbox
          :slide="slide"
          :sources="imageSources"
          :options="lightboxOptions"
          :toggler="toggler"
        />
        <div class="gallery">
          <div
            v-for="(image, index) in props.images"
            :key="image.id"
            class="gallery_item"
            :data-fslightbox="'gallery'"
            @click="openLightboxOnSlide(index + 1)"
          >
            <img :src="image.thumbnail" :alt="image.alt" class="rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-details-modal {
  @apply w-[700px] h-auto bg-primary-300 border border-line-1 rounded-lg;
  .head {
    @apply flex items-center justify-between w-full h-12 border-b border-line-1 px-4;
    .close {
      @apply cursor-pointer;
    }
  }

  .content {
    @apply p-4;
    .gallery {
      @apply flex gap-3 flex-wrap justify-center max-h-[320px] max-sm:max-h-[250px] overflow-y-auto;
      &_item {
        @apply max-md:max-w-[140px] max-xs:max-w-[100px] cursor-pointer;
      }
    }
  }
}

::-webkit-scrollbar {
  @apply xs:w-2 w-1;
}
</style>
