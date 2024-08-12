<template>
  <BaseModal />
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
import BaseModal from "~/components/base/BaseModal.vue";

const { locale, availableLocales } = useI18n();
</script>
<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
  transform: scale(0.95);
}
</style>
