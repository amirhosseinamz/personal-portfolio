<template>
  <div :dir="localeProperties.dir === 'rtl' ? 'rtl' : 'ltr'">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
import {useI18n} from "#imports";

const { locale, localeProperties } = useI18n()
</script>
