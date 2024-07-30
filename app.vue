<template>
  <BaseToaster />
  <div :dir="locale === 'fa' ? 'rtl' : 'ltr'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from "#imports";
import BaseToaster from "~/components/base/BaseToaster.vue";

const { locale, availableLocales } = useI18n();
</script>
