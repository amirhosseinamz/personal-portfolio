<template>
  <TypeWrite text="Hello. I'm amir hossein" :end-delay="2000" />
</template>

<script setup lang="ts">
import useModalStore from "~/stores/useModalStore";
import { ref } from "#imports";
import TypeWrite from "~/components/base/TypeWrite.vue";

const replace = ref([
  { from: "Vue", to: "React?" },
  { from: "Typewriter React?", to: "Joking, it`s Vue!" },
]);
// Initialize store
const store = useModalStore();
</script>
