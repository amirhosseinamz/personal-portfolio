<script setup lang="ts">
import { onMounted, onUnmounted, ref, useI18n } from "#imports";
import { FolderFace } from "~/interfaces/files.interface";
import BaseAccordion from "~/components/base/BaseAccordion.vue";
import BaseFilePreview from "~/components/base/BaseFilePreview.vue";
import CodeSnippets from "~/components/pages/about-me/CodeSnippets.vue";
import BaseResizable from "~/components/base/BaseResizable.vue";
import BaseFileManager from "~/components/base/BaseFileManager.vue";
import { BreakpointsEnum } from "~/enums/breakpoints.enum";

const { t } = useI18n();

const folders = ref<FolderFace[]>([
  {
    id: 1,
    title: t("aboutMe.bio"),
    files: [
      {
        id: 1,
        parentId: 1,
        type: "md",
        title: t("aboutMe.files.biography"),
        content: t("aboutMe.files.biographyText", { br: `<br />` }),
        status: "open",
      },
      {
        id: 2,
        parentId: 1,
        type: "md",
        title: t("aboutMe.files.contactInformation"),
        content: t("aboutMe.files.contactInformationText", {
          br: `<br />`,
        }),
        status: "close",
      },
      {
        id: 3,
        parentId: 1,
        type: "md",
        title: t("aboutMe.files.interests"),
        content: t("aboutMe.files.interestsText", {
          br: `<br />`,
        }),
        status: "close",
      },
      {
        id: 4,
        parentId: 1,
        type: "md",
        title: t("aboutMe.files.languages"),
        content: t("aboutMe.files.languagesText", {
          br: `<br />`,
        }),
        status: "close",
      },
    ],
  },
  {
    id: 2,
    title: t("aboutMe.files.skills.skillsTitle"),
    files: [
      {
        id: 1,
        parentId: 2,
        type: "md",
        title: t("aboutMe.files.skills.javascript"),
        content: t("aboutMe.files.skills.javascriptContent", { br: `<br />` }),
        status: "close",
      },
      {
        id: 2,
        parentId: 2,
        type: "md",
        title: t("aboutMe.files.skills.htmlAndCss"),
        content: t("aboutMe.files.skills.htmlAndCssContent", { br: `<br />` }),
        status: "close",
      },
      {
        id: 3,
        parentId: 2,
        type: "md",
        title: t("aboutMe.files.skills.typescript"),
        content: t("aboutMe.files.skills.typescriptContent", { br: `<br />` }),
        status: "close",
      },
      {
        id: 4,
        parentId: 2,
        type: "md",
        title: t("aboutMe.files.skills.frameworks"),
        content: t("aboutMe.files.skills.frameworksContent", { br: `<br />` }),
        status: "close",
      },
    ],
  },
  {
    id: 3,
    title: t("aboutMe.files.experience.experienceTitle"),
    files: [
      {
        id: 1,
        parentId: 3,
        type: "md",
        title: t("aboutMe.files.experience.parsData"),
        content: t("aboutMe.files.experience.parsDataContent", {
          br: `<br />`,
        }),
        status: "close",
      },
      {
        id: 2,
        parentId: 3,
        type: "md",
        title: t("aboutMe.files.experience.samaneAhan"),
        content: t("aboutMe.files.experience.samaneAhanContent", {
          br: `<br />`,
        }),
        status: "close",
      },
      {
        id: 3,
        parentId: 3,
        type: "md",
        title: t("aboutMe.files.experience.drKermani"),
        content: t("aboutMe.files.experience.drKermaniContent", {
          br: `<br />`,
        }),
        status: "close",
      },
      {
        id: 3,
        parentId: 4,
        type: "md",
        title: t("aboutMe.files.experience.mahanSoft"),
        content: t("aboutMe.files.experience.mahanSoftContent", {
          br: `<br />`,
        }),
        status: "close",
      },
      {
        id: 5,
        parentId: 3,
        type: "md",
        title: t("aboutMe.files.experience.helpsy"),
        content: t("aboutMe.files.experience.helpsyContent", {
          br: `<br />`,
        }),
        status: "close",
      },
      {
        id: 6,
        parentId: 3,
        type: "md",
        title: t("aboutMe.files.experience.otherProjects"),
        content: t("aboutMe.files.experience.otherProjectsContent", {
          br: `<br />`,
        }),
        status: "close",
      },
    ],
  },
  {
    id: 4,
    title: t("aboutMe.files.education.educationTitle"),
    files: [
      {
        id: 1,
        parentId: 4,
        type: "md",
        title: t("aboutMe.files.education.degree"),
        content: t("aboutMe.files.education.degreeContent", {
          br: `<br />`,
        }),
        status: "close",
      },
    ],
  },
]);

// Size Settings

const windowWidth = ref();
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="flex max-lg:flex-col -my-4 h-[inherit]">
    <div class="text-base max-md:text-sm text-white p-6 lg:hidden">
      {{ $t("aboutMe.pageTitle") }}
    </div>
    <div class="file-selection">
      <BaseAccordion
        :theme="windowWidth > BreakpointsEnum.LG ? 'dark' : 'light'"
        title="personal-info"
        :opened-default="true"
        class="max-lg:mb-[2px]"
        content-class="!pe-0"
      >
        <div class="py-4">
          <BaseFileManager :folders="folders" />
        </div>
      </BaseAccordion>
      <BaseAccordion
        :theme="windowWidth > BreakpointsEnum.LG ? 'dark' : 'light'"
        title="contacts"
        :opened-default="false"
      >
        <div class="py-4 flex flex-col gap-2">
          <NuxtLink class="flex items-center gap-2">
            <svg
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.811096 0.548828H15.4108C15.6259 0.548828 15.8322 0.634283 15.9844 0.786393C16.1365 0.938503 16.2219 1.14481 16.2219 1.35992V14.3375C16.2219 14.5526 16.1365 14.7589 15.9844 14.911C15.8322 15.0631 15.6259 15.1486 15.4108 15.1486H0.811096C0.59598 15.1486 0.389675 15.0631 0.237565 14.911C0.0854545 14.7589 0 14.5526 0 14.3375V1.35992C0 1.14481 0.0854545 0.938503 0.237565 0.786393C0.389675 0.634283 0.59598 0.548828 0.811096 0.548828ZM8.15963 7.59158L2.95888 3.17516L1.90851 4.41127L8.17017 9.728L14.3191 4.40721L13.2582 3.18002L8.16044 7.59158H8.15963Z"
                fill="#607B96"
              />
            </svg>
            <span class="text-base text-secondary-1"> Mail me </span>
          </NuxtLink>
          <NuxtLink class="flex items-center gap-2">
            <svg
              width="17"
              height="18"
              viewBox="0 0 17 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.221 13.0453V16.2319C16.2211 16.46 16.1347 16.6797 15.9791 16.8466C15.8236 17.0136 15.6105 17.1153 15.3829 17.1312C14.9891 17.1583 14.6674 17.1727 14.4187 17.1727C6.45507 17.1727 0 10.7176 0 2.754C0 2.50527 0.0135175 2.18356 0.0414537 1.78975C0.0574246 1.56215 0.159129 1.34908 0.326046 1.19354C0.492962 1.038 0.712664 0.951557 0.940819 0.95166H4.12735C4.23913 0.951547 4.34696 0.992987 4.4299 1.06793C4.51283 1.14287 4.56495 1.24597 4.57613 1.35719C4.59686 1.56445 4.61578 1.72937 4.63381 1.85463C4.8129 3.10448 5.17992 4.32008 5.72242 5.4602C5.80803 5.64044 5.75215 5.85582 5.58994 5.97117L3.64522 7.36077C4.83427 10.1314 7.04222 12.3393 9.81282 13.5284L11.2006 11.5872C11.2573 11.5079 11.3401 11.4511 11.4345 11.4265C11.5288 11.402 11.6288 11.4113 11.717 11.453C12.857 11.9945 14.0723 12.3606 15.3217 12.5389C15.4469 12.5569 15.6118 12.5767 15.8173 12.5966C15.9284 12.6079 16.0312 12.6601 16.106 12.7431C16.1807 12.826 16.2221 12.9337 16.2219 13.0453H16.221Z"
                fill="#607B96"
              />
            </svg>
            <span class="text-base text-secondary-1"> +98 936 645 5242 </span>
          </NuxtLink>
        </div>
      </BaseAccordion>
    </div>
    <div
      class="2xl:w-[calc(100%_-_310px)] xl:w-[calc(100%_-_275px)] lg:w-[calc(100%_-_250px)] w-full flex"
    >
      <BaseResizable
        v-if="windowWidth > BreakpointsEnum.LG"
        :start-pane-min-width="300"
        :end-pane-min-width="360"
      >
        <template #left>
          <BaseFilePreview :folders="folders" />
        </template>
        <template #right>
          <CodeSnippets />
        </template>
      </BaseResizable>
      <div v-else class="flex flex-col w-full pb-6">
        <BaseFilePreview :folders="folders" />
        <CodeSnippets />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.file-selection {
  @apply w-[310px] max-2xl:w-[275px] max-xl:w-[250px] max-lg:w-full shrink-0 lg:border-e border-line-1 max-lg:mb-7;
}
</style>
