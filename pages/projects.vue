<script setup lang="ts">

import BaseAccordion from "~/components/base/BaseAccordion.vue";
import ProjectsFilters from "~/components/pages/projects/ProjectsFilters.vue";
</script>

<template>
  <div class="flex -my-4 h-[inherit]">
    <div class="filter-selection">
      <BaseAccordion :title="$t('projects.projects')" :opened-default="true">
        <div class="py-4">
          <ProjectsFilters></ProjectsFilters>
        </div>
      </BaseAccordion>
    </div>
  </div>
</template>

<style scoped lang="scss">
.filter-selection {
  @apply w-[310px] max-xl:w-[250px] shrink-0 border-e border-line-1;
}
</style>