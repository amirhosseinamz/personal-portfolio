<script setup lang="ts">
import { FileFace, FolderFace } from "~/interfaces/files.interface";
import { computed } from "#imports";

interface PropsFace {
  folders: FolderFace[];
}

const props = withDefaults(defineProps<PropsFace>(), {});
const emit = defineEmits(["update:folders"]);

const selectedFile = computed<FileFace | undefined>(() => {
  for (const folder of props.folders) {
    const file = folder.files?.find((f: FileFace) => f.status === "open");
    if (file) {
      return file;
    }
  }
  return undefined;
});
const closeFile = () => {
  let folders = props.folders.map((folder: FolderFace) => {
    folder.files?.forEach((f: FileFace) => {
      f.status = "close";
    });
    return folder;
  });
  emit("update:folders", folders);
};
</script>

<template>
  <div class="file-preview">
    <div class="head">
      <div class="file-item" v-if="selectedFile">
        <span class="title">
          {{ selectedFile?.title }}
        </span>
        <div class="close-icon" @click="closeFile">
          <svg
            width="11"
            height="10"
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
    </div>
    <div class="ps-6 text-white lg:hidden">// {{ selectedFile?.title }}</div>
    <div class="content" :class="{ 'has-file': !!selectedFile }">
      <template v-if="selectedFile">
        <div class="lines max-lg:hidden">
          <div class="number">
            <template
              v-for="num in Array.from({ length: 25 }, (v, k) => k + 1)"
            >
              {{ num }}
              <br />
            </template>
          </div>
        </div>
        <div class="preview">
          <div
            class="text-lg text-secondary-1 leading-7"
            v-html="selectedFile?.content"
          ></div>
        </div>
      </template>

      <div
        v-else
        class="w-full h-full flex items-center justify-center px-4 text-center"
      >
        {{ $t("aboutMe.selectFileSentence") }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-preview {
  @apply flex flex-col w-full h-full lg:border-e border-line-1;
  .head {
    @apply h-10 border-b border-line-1 w-full shrink-0 sticky top-0 bg-primary-300 max-lg:hidden;
    .file-item {
      @apply h-full border-e border-line-1 flex items-center justify-between ps-[14px] pe-3 w-[218px];

      .title {
        @apply text-base text-secondary-1;
      }

      .close-icon {
        @apply cursor-pointer w-[15px] h-[15px] flex items-center justify-center rounded-full;
      }
    }
  }

  .content {
    @apply relative h-full lg:overflow-auto;
    &:after {
      content: " ";
      @apply sticky -top-4 end-0 h-[calc(100%_+_1rem)] w-[1px] bg-line-1 max-lg:hidden;
    }

    .lines {
      @apply flex flex-col h-full me-8 max-lg:hidden;
      .number {
        @apply text-base text-secondary-1 leading-7;
      }
    }

    .preview {
      @apply h-full w-full;
    }

    &.has-file {
      @apply flex pt-4 ps-9 max-lg:ps-6;
    }
  }
}

::-webkit-scrollbar {
  @apply xl:w-4 w-3 lg:border-l lg:border-line-1;
}

::-webkit-scrollbar-track {
  @apply bg-primary-300;
}

::-webkit-scrollbar-thumb {
  @apply bg-secondary-1;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-secondary-1;
}
</style>
