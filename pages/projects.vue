<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "#imports";
import BaseAccordion from "~/components/base/BaseAccordion.vue";
import ProjectsFilters from "~/components/pages/projects/ProjectsFilters.vue";
import ProjectCard from "~/components/pages/projects/ProjectCard.vue";
import {
  ProjectFace,
  technologies,
  TechnologyFace,
} from "~/types/projects/projects";
import { BreakpointsEnum } from "~/enums/breakpoints.enum";

const projects = ref<ProjectFace[]>([
  {
    id: 1,
    title: "_limoo",
    img: "/images/projects/project-1.jpg",
    technologies: ["html", "css", "javascript", "vue"],
    description:
      "Limoo is the best project that i have worked and the interesting thing about that is this project is my first project that i started that in PARSDATA company as my first job...",
  },
  {
    id: 2,
    title: "_dr-kermani",
    img: "/images/projects/project-1.jpg",
    technologies: ["html", "css", "javascript", "vue", "bootstrap"],
    description:
      "DRKERMANI is the best project that i have worked and the interesting thing about that is this project is my first project that i started that in PARSDATA company as my first job...",
  },
  {
    id: 3,
    title: "_win-win",
    img: "/images/projects/project-1.jpg",
    technologies: ["html", "css", "javascript", "tailwind"],
    description:
      "WINWIN is the best project that i have worked and the interesting thing about that is this project is my first project that i started that in PARSDATA company as my first job...",
  },
  {
    id: 3,
    title: "_saadat-holding",
    img: "/images/projects/project-1.jpg",
    technologies: ["html", "css", "javascript", "tailwind"],
    description:
      "HOLDING is the best project that i have worked and the interesting thing about that is this project is my first project that i started that in PARSDATA company as my first job...",
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
