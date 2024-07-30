<template>
  <button @click="successToast">Click me!</button>
</template>

<script setup lang="ts">
import { useToasterStore } from "~/stores/useToasterStore";

const toasterStore = useToasterStore();

const successToast = () => toasterStore.error({ text: "Yahoooooo!" });
</script>

<style scoped lang="scss"></style>
