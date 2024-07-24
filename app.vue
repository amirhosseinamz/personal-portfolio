<template>
  <div :dir="locale === 'fa' ? 'rtl' : 'ltr'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import { useI18n } from "#imports";

const { locale, availableLocales } = useI18n();
</script>
