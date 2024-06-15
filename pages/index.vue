<template>
  <div
      class="flex justify-center items-center gap-[130px] max-2xl:gap-[60px] max-xl:gap-[30px] max-lg:gap-0 my-[86px] max-lg:mx-10 max-xs:mx-6">
    <div class="flex flex-col my-auto max-2xl:max-w-[40%] max-lg:max-w-[100%]">
      <span class="text-light-100 text-lg block mb-3 max-xl:mb-2">
        {{ $t('mainPage.greeting') }}
      </span>
      <h1 class="text-light-100 text-[56px] max-xl:text-[48px] max-xs:text-[40px] mb-2 leading-[64px] max-xs:leading-[48px]">
        {{ $t('fullName') }}
      </h1>
      <div class="flex items-center gap-5 max-xs:gap-3">
        <span class="text-secondary-3 text-[32px]">
          >
        </span>
        <span class="text-secondary-3 text-[32px] max-xl:text-[28px] max-xs:text-[22px]">
          {{ $t('role') }}
        </span>
      </div>
      <div class="flex flex-col mt-20 max-lg:mt-[190px]">
        <div class="flex flex-col gap-1">
          <span class="text-secondary-1 text-base max-lg:hidden">
            // Complete the game to continue
          </span>
          <span class="text-secondary-1 text-base max-lg:hidden">
            // You can also see it in my github page
          </span>
          <span class="text-secondary-1 text-base lg:hidden">
            // Find my profile on Github
          </span>
        </div>
      </div>
      <CodeHighlight
          class="mt-[-4rem]"
          :code="codeSnippet"
          language="javascript"
      />
    </div>
    <div class="relative">
      <GamePad v-if="windowWidth >= BreakpointsEnum.LG"/>
      <div class="green-bg"></div>
      <div class="purple-bg"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { setPageLayout } from "#app";
// setPageLayout('custom');
import {BreakpointsEnum} from "~/enums/breakpoints.enum";

const {locale, localeProperties} = useI18n();
const windowWidth = ref();

import GamePad from "~/components/pages/index/GamePad.vue";
import CodeHighlight from "~/components/base/CodeHighlight.vue";

const handleResize = () => {
  windowWidth.value = window.innerWidth;
}

onMounted(() => {
  window.addEventListener('resize', handleResize);
})
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});

const codeSnippet = ref(``);

onBeforeMount(() => {
  handleResize();
  if (windowWidth.value >= BreakpointsEnum.XL) {
    codeSnippet.value = `
const githubLink = "https://github.com/example/url";`
  } else {
    codeSnippet.value = `
const githubLink =
"https://github.com/example/url";`
  }
})


</script>

<style scoped lang="scss">
//.container {
//  background-color: rgba(0,0,0,0.2);
//  .bold {
//    font-size: 26px;
//  }
//}
.green-bg {
  @apply w-[490px] h-[250px] rounded-[200px] absolute top-[30px] max-lg:top-[-260px] start-[-90px] max-lg:start-[-730px]
  max-xs:start-[-520px] bg-accent-2 z-[1] blur-[80px] rotate-45 opacity-50 max-lg:opacity-[15%];
}

.purple-bg {
  @apply w-[490px] h-[250px] rounded-[200px] absolute top-[260px] max-lg:top-[-40px] start-[80px] max-lg:start-[-470px]
  bg-secondary-3 z-[1] blur-[80px] rotate-[-35deg] opacity-50 max-lg:opacity-[15%];
}
</style>
