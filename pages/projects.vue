<script setup lang="ts">
import { onMounted, onUnmounted, ref, useI18n } from "#imports";
import BaseAccordion from "~/components/base/BaseAccordion.vue";
import ProjectsFilters from "~/components/pages/projects/ProjectsFilters.vue";
import ProjectCard from "~/components/pages/projects/ProjectCard.vue";
import {
  ProjectFace,
  technologies,
  TechnologyFace,
} from "~/types/projects/projects";
import { BreakpointsEnum } from "~/enums/breakpoints.enum";

const { t } = useI18n();

const projects = ref<ProjectFace[]>([
  {
    id: 2,
    title: "_helpsy",
    img: "/images/projects/helpsy-bg.jpg",
    technologies: ["angular", "css", "bootstrap", "typescript", "html"],
    description: t("projects.helpsyDescription", { br: `<br />` }),
    gallery: [
      {
        id: 1,
        largeImage: "/images/projects/helpsy-large-1.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-1.jpg",
        alt: "image 1",
      },
      {
        id: 2,
        largeImage: "/images/projects/helpsy-large-2.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-2.jpg",
        alt: "image 2",
      },
      {
        id: 345,
        largeImage: "/images/projects/helpsy-large-3.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-3.jpg",
        alt: "image 345",
      },
      {
        id: 45,
        largeImage: "/images/projects/helpsy-large-4.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-4.jpg",
        alt: "image 45",
      },
      {
        id: 5,
        largeImage: "/images/projects/helpsy-large-5.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-5.jpg",
        alt: "image 5",
      },
      {
        id: 6,
        largeImage: "/images/projects/helpsy-large-6.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-6.jpg",
        alt: "image 6",
      },
      {
        id: 7,
        largeImage: "/images/projects/helpsy-large-7.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-7.jpg",
        alt: "image 7",
      },
      {
        id: 8,
        largeImage: "/images/projects/helpsy-large-8.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-8.jpg",
        alt: "image 8",
      },
      {
        id: 9,
        largeImage: "/images/projects/helpsy-large-9.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-9.jpg",
        alt: "image 9",
      },
      {
        id: 10,
        largeImage: "/images/projects/helpsy-large-10.jpg",
        thumbnail: "/images/projects/helpsy-thumbnail-10.jpg",
        alt: "image 10",
      },
    ],
  },
  {
    id: 3,
    title: "_dr-kermani",
    img: "/images/projects/drdiet-bg.jpg",
    technologies: ["vue", "css", "bootstrap", "html"],
    description: t("projects.drKermaniDescription", { br: `<br />` }),
    gallery: [],
  },
  {
    id: 4,
    title: "_win-win",
    img: "/images/projects/winwin-bg.jpg",
    technologies: ["html", "css", "javascript", "tailwind"],
    description: t("projects.winwinDescription", { br: `<br />` }),
    gallery: [
      {
        id: 1,
        largeImage: "/images/projects/winwin-large-1.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-1.jpg",
        alt: "image 1",
      },
      {
        id: 2,
        largeImage: "/images/projects/winwin-large-2.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-2.jpg",
        alt: "image 2",
      },
      {
        id: 3,
        largeImage: "/images/projects/winwin-large-3.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-3.jpg",
        alt: "image 3",
      },
      {
        id: 4,
        largeImage: "/images/projects/winwin-large-4.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-4.jpg",
        alt: "image 4",
      },
      {
        id: 5,
        largeImage: "/images/projects/winwin-large-5.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-5.jpg",
        alt: "image 5",
      },
      {
        id: 6,
        largeImage: "/images/projects/winwin-large-6.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-6.jpg",
        alt: "image 6",
      },
      {
        id: 7,
        largeImage: "/images/projects/winwin-large-7.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-7.jpg",
        alt: "image 7",
      },
      {
        id: 8,
        largeImage: "/images/projects/winwin-large-8.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-8.jpg",
        alt: "image 8",
      },
      {
        id: 9,
        largeImage: "/images/projects/winwin-large-9.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-9.jpg",
        alt: "image 9",
      },
      {
        id: 10,
        largeImage: "/images/projects/winwin-large-10.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-10.jpg",
        alt: "image 10",
      },
      {
        id: 11,
        largeImage: "/images/projects/winwin-large-11.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-11.jpg",
        alt: "image 11",
      },
      {
        id: 12,
        largeImage: "/images/projects/winwin-large-12.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-12.jpg",
        alt: "image 12",
      },
      {
        id: 13,
        largeImage: "/images/projects/winwin-large-13.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-13.jpg",
        alt: "image 13",
      },
      {
        id: 14,
        largeImage: "/images/projects/winwin-large-14.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-14.jpg",
        alt: "image 14",
      },
      {
        id: 15,
        largeImage: "/images/projects/winwin-large-15.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-15.jpg",
        alt: "image 15",
      },
      {
        id: 16,
        largeImage: "/images/projects/winwin-large-16.jpg",
        thumbnail: "/images/projects/winwin-thumbnail-16.jpg",
        alt: "image 16",
      },
    ],
  },
  {
    id: 5,
    title: "_saadat-holding",
    img: "/images/projects/saadat-bg.jpg",
    technologies: ["html", "css", "javascript", "tailwind"],
    description: t("projects.saadatholdingDescription", { br: `<br />` }),
    gallery: [
      {
        id: 1,
        largeImage: "/images/projects/saadat-large-1.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-1.jpg",
        alt: "image 1",
      },
      {
        id: 2,
        largeImage: "/images/projects/saadat-large-2.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-2.jpg",
        alt: "image 2",
      },
      {
        id: 3,
        largeImage: "/images/projects/saadat-large-3.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-3.jpg",
        alt: "image 3",
      },
      {
        id: 4,
        largeImage: "/images/projects/saadat-large-4.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-4.jpg",
        alt: "image 4",
      },
      {
        id: 5,
        largeImage: "/images/projects/saadat-large-5.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-5.jpg",
        alt: "image 5",
      },
      {
        id: 6,
        largeImage: "/images/projects/saadat-large-6.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-6.jpg",
        alt: "image 6",
      },
      {
        id: 7,
        largeImage: "/images/projects/saadat-large-7.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-7.jpg",
        alt: "image 7",
      },
      {
        id: 8,
        largeImage: "/images/projects/saadat-large-8.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-8.jpg",
        alt: "image 8",
      },
      {
        id: 9,
        largeImage: "/images/projects/saadat-large-9.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-9.jpg",
        alt: "image 9",
      },
      {
        id: 10,
        largeImage: "/images/projects/saadat-large-10.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-10.jpg",
        alt: "image 10",
      },
      {
        id: 11,
        largeImage: "/images/projects/saadat-large-11.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-11.jpg",
        alt: "image 11",
      },
      {
        id: 12,
        largeImage: "/images/projects/saadat-large-12.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-12.jpg",
        alt: "image 12",
      },
      {
        id: 13,
        largeImage: "/images/projects/saadat-large-13.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-13.jpg",
        alt: "image 13",
      },
      {
        id: 14,
        largeImage: "/images/projects/saadat-large-14.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-14.jpg",
        alt: "image 14",
      },
      {
        id: 15,
        largeImage: "/images/projects/saadat-large-15.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-15.jpg",
        alt: "image 15",
      },
      {
        id: 16,
        largeImage: "/images/projects/saadat-large-16.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-16.jpg",
        alt: "image 16",
      },
      {
        id: 17,
        largeImage: "/images/projects/saadat-large-17.jpg",
        thumbnail: "/images/projects/saadat-thumbnail-17.jpg",
        alt: "image 17",
      },
    ],
  },
  {
    id: 1,
    title: "_limoo",
    img: "/images/projects/limoo-bg.jpg",
    technologies: ["html", "css", "javascript", "vue"],
    description: t("projects.limooDescription", { br: `<br />` }),
    gallery: [],
  },
]);
const filteredProjects = ref<ProjectFace[] | null>();

function updateFilters(technologies: TechnologyFace[]) {
  let selectedTechnologies: technologies[] = [];
  technologies.forEach((t: TechnologyFace) => {
    if (t.checked) {
      selectedTechnologies.push(t.technology);
    }
  });
  filteredProjects.value = projects.value.filter((p: ProjectFace) =>
    selectedTechnologies.some((item: technologies) =>
      p.technologies.includes(item),
    ),
  );
}

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
      {{ $t("projects.pageTitle") }}
    </div>
    <div class="filter-selection">
      <BaseAccordion
        :theme="windowWidth > BreakpointsEnum.LG ? 'dark' : 'light'"
        :title="$t('projects.filters')"
      >
        <div class="py-4">
          <ProjectsFilters @update="updateFilters"></ProjectsFilters>
        </div>
      </BaseAccordion>
    </div>
    <div
      class="2xl:w-[calc(100%_-_310px)] xl:w-[calc(100%_-_275px)] w-full flex"
    >
      <div class="projects">
        <div
          class="col-span-3 max-md:col-span-2 max-sm:col-span-1 text-white lg:hidden"
        >
          // {{ $t("projects.projects") }}
        </div>
        <ProjectCard
          v-for="(p, index) in filteredProjects"
          :key="p.id"
          :data="p"
          :counter="index + 1"
          class="col-span-1"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter-selection {
  @apply w-[310px] max-2xl:w-[275px] max-xl:w-[250px] max-lg:w-full shrink-0 lg:border-e border-line-1;
}

.projects {
  @apply px-10 max-2xl:px-8 max-lg:px-6 max-sm:ps-4 pb-16 pt-10 max-2xl:pt-8 grid grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-x-6 gap-y-8 overflow-y-auto max-xl:w-full;
}

::-webkit-scrollbar {
  @apply xl:w-3 w-2.5 border-l border-line-1;
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
