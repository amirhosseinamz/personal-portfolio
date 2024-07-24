<script setup lang="ts">
import { FileFace, FolderFace } from "~/interfaces/files.interface";
import { ref } from "#imports";

interface PropsFace {
  folders: FolderFace[];
}

const props = withDefaults(defineProps<PropsFace>(), {});
const emit = defineEmits(["update:folders"]);

const toggle = ref<Array<HTMLDivElement | null>>([]);
const openToggle = (index: number) => {
  toggle.value[index]?.classList.toggle("active");
  let content = toggle.value[index]?.nextElementSibling as HTMLElement | null;
  if (content) {
    if (content?.style.getPropertyValue("max-height")) {
      content.style.removeProperty("max-height");
    } else {
      content.style.setProperty("max-height", `-webkit-fill-available`);
    }
  }
};

const selectFile = (folderId: any, fileId: any) => {
  const folders = props.folders.map((folder: FolderFace) => {
    if (folder.id === folderId) {
      if (folder.files) {
        folder.files.forEach((file: FileFace) => {
          if (file.id === fileId) {
            file.status = "open";
          } else {
            file.status = "close";
          }
        });
      }
    }
    return folder;
  });
  emit("update:folders", folders);
};
</script>

<template>
  <div class="file-manager">
    <div
      v-for="(folder, index) in folders"
      :key="folder.id"
      class="toggle-wrapper"
    >
      <div class="toggle" ref="toggle" @click="openToggle(index)">
        <div class="arrow">
          <svg
            width="9"
            height="14"
            viewBox="0 0 9 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.69658 7.18971L0.746582 2.23971L2.16058 0.82571L8.52458 7.18971L2.16058 13.5537L0.746582 12.1397L5.69658 7.18971Z"
              fill="#607B96"
            />
          </svg>
        </div>
        <div class="folder-icon">
          <svg
            width="16"
            height="14"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.0802 4.30056V12.9672C15.0802 13.1588 15.0041 13.3425 14.8687 13.4779C14.7332 13.6134 14.5495 13.6895 14.358 13.6895H1.35796C1.16642 13.6895 0.982719 13.6134 0.847276 13.4779C0.711833 13.3425 0.635742 13.1588 0.635742 12.9672V3.57834H14.358C14.5495 3.57834 14.7332 3.65443 14.8687 3.78988C15.0041 3.92532 15.0802 4.10902 15.0802 4.30056ZM8.15696 2.1339H0.635742V1.41168C0.635742 1.22013 0.711833 1.03643 0.847276 0.900987C0.982719 0.765544 1.16642 0.689453 1.35796 0.689453H6.71252L8.15696 2.1339Z"
              fill="#E99287"
            />
          </svg>
        </div>
        {{ folder.title }}
      </div>
      <div class="toggle-content">
        <div class="pt-2 flex flex-col gap-2">
          <div
            v-for="file in folder.files"
            class="file"
            @click="selectFile(folder.id, file.id)"
          >
            <div>
              <svg
                v-if="file.type === 'md'"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.44684 0.844727H16.0466C16.2617 0.844727 16.468 0.930181 16.6201 1.08229C16.7722 1.2344 16.8577 1.44071 16.8577 1.65582V14.6334C16.8577 14.8485 16.7722 15.0548 16.6201 15.2069C16.468 15.359 16.2617 15.4445 16.0466 15.4445H1.44684C1.23172 15.4445 1.02542 15.359 0.873307 15.2069C0.721197 15.0548 0.635742 14.8485 0.635742 14.6334V1.65582C0.635742 1.44071 0.721197 1.2344 0.873307 1.08229C1.02542 0.930181 1.23172 0.844727 1.44684 0.844727ZM4.69122 10.9834V7.73904L6.31342 9.36124L7.93561 7.73904V10.9834H9.5578V5.30576H7.93561L6.31342 6.92795L4.69122 5.30576H3.06903V10.9834H4.69122ZM13.6133 8.55014V5.30576H11.9911V8.55014H10.3689L12.8022 10.9834L15.2355 8.55014H13.6133Z"
                  fill="#81A1C1"
                />
              </svg>
            </div>
            <span
              class="title"
              :class="{ '!text-white': file.status === 'open' }"
            >
              {{ file.title }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-manager {
  @apply flex flex-col gap-2;
  .file {
    @apply flex items-center gap-2 cursor-pointer;
    .title {
      @apply text-secondary-1 text-base;
    }
  }
}

.toggle-wrapper {
  @apply w-full bg-primary-300 h-fit;
  .folder-icon {
    @apply me-2;
  }

  &:nth-child(3n + 1) {
    .folder-icon {
      svg {
        path {
          @apply fill-accent-3;
        }
      }
    }
  }

  &:nth-child(3n + 2) {
    .folder-icon {
      svg {
        path {
          @apply fill-accent-2;
        }
      }
    }
  }

  &:nth-child(3n + 3) {
    .folder-icon {
      svg {
        path {
          @apply fill-[#3A49A4];
        }
      }
    }
  }
}

.toggle {
  @apply text-base text-white relative m-0 cursor-pointer flex items-center h-fit;

  .arrow {
    @apply me-[13px];
  }

  &.active {
    .arrow {
      @apply rotate-90;
    }
  }
}

.toggle-content {
  @apply ps-[22px] max-h-0 overflow-hidden;
}
</style>
