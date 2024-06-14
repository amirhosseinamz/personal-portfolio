<template>
  <div class="flex justify-center items-center gap-[130px]">
    <div class="flex flex-col my-auto">
      <span class="text-light-100 text-lg block">
        {{ $t('mainPage.greeting') }}
      </span>
      <h1 class="text-light-100 text-[56px] mb-2">
        {{ $t('fullName') }}
      </h1>
      <div class="flex items-center gap-5">
        <span class="text-secondary-3 text-[32px]">
          >
        </span>
        <span class="text-secondary-3 text-[32px]">
          {{ $t('role') }}
        </span>
      </div>
    </div>
    <div class="relative">
      <GamePad/>
      <div class="green-bg"></div>
      <div class="purple-bg"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { setPageLayout } from "#app";
// setPageLayout('custom');

import GamePad from "~/components/pages/index/GamePad.vue";

const {locale, localeProperties} = useI18n();

</script>

<style scoped lang="scss">
//.container {
//  background-color: rgba(0,0,0,0.2);
//  .bold {
//    font-size: 26px;
//  }
//}
.green-bg {
  @apply w-[490px] h-[250px] rounded-[200px] absolute top-[30px] start-[-90px] bg-accent-2 z-[1] blur-[80px] rotate-45 opacity-60;
}

.purple-bg {
  @apply w-[490px] h-[250px] rounded-[200px] absolute top-[260px] start-[80px] bg-secondary-3 z-[1] blur-[80px] rotate-[-35deg] opacity-60;
}
</style>
