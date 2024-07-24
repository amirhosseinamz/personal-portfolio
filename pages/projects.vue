<script setup lang="ts">
import { ref } from "#imports";
import BaseAccordion from "~/components/base/BaseAccordion.vue";
import ProjectsFilters from "~/components/pages/projects/ProjectsFilters.vue";
import ProjectCard from "~/components/pages/projects/ProjectCard.vue";
import {
  ProjectFace,
  technologies,
  TechnologyFace,
} from "~/types/projects/projects";

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
</script>

<template>
  <div class="flex -my-4 h-[inherit]">
    <div class="filter-selection">
      <BaseAccordion :title="$t('projects.projects')" :opened-default="true">
        <div class="py-4">
          <ProjectsFilters @update="updateFilters"></ProjectsFilters>
        </div>
      </BaseAccordion>
    </div>
    <div class="xl:w-[calc(100%_-_310px)] w-[calc(100%_-_250px)] flex">
      <div class="projects">
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
  @apply w-[310px] max-xl:w-[250px] shrink-0 border-e border-line-1;
}

.projects {
  @apply px-10 max-2xl:px-8 pb-6 pt-10 max-2xl:pt-8 grid grid-cols-3 max-xl:grid-cols-2 gap-x-6 gap-y-8 overflow-y-auto;
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
