<script setup lang="ts">
import BaseCheckbox from "~/components/base/BaseCheckbox.vue";

const projectFilters = ref();
</script>

<template>
  <div class="projects-filter">
    <div class="projects-filter_item">
      {{ projectFilters }}
      <BaseCheckbox name="project-filter" value="vue" id="vue" v-model="projectFilters"></BaseCheckbox>
      <BaseCheckbox name="project-filter" value="react" id="react" v-model="projectFilters"></BaseCheckbox>
    </div>
  </div>
</template>

<style scoped lang="scss">
.projects-filter {
  @apply flex flex-col gap-[18px];
  &_item {
  }
}
</style>