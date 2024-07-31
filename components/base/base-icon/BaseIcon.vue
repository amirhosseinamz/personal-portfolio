<template>
  <component :is="iconComponent" />
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref, watch } from "vue";
import { iconMapping } from "./iconMapping";
import { shallowRef } from "#imports"; // Adjust the path as necessary

// Define what svgs we have
export type TIconName =
  | "toast-error"
  | "toast-warning"
  | "toast-success"
  | "toggle-arrow"
  | "readme"
  | "folder-icon";

const props = defineProps<{ name: TIconName }>();

const iconComponent = shallowRef();

const loadIcon = (name: TIconName) => {
  const iconLoader = iconMapping[name];
  if (iconLoader) {
    iconComponent.value = defineAsyncComponent(iconLoader);
  } else {
    console.error(`Icon "${name}" not found in the icon mapping.`);
    iconComponent.value = null;
  }
};

// Load the icon when the component is created or the prop changes
loadIcon(props.name);

watch(
  () => props.name,
  (newName) => {
    loadIcon(newName);
  },
);
</script>

<style scoped lang="scss"></style>
