<template>
  <div
    class="flex justify-center items-center gap-[130px] max-2xl:gap-[60px] max-xl:gap-[30px] max-lg:gap-0 my-auto max-lg:mx-10 max-xs:mx-6"
  >
    <div
      class="flex flex-col my-auto max-2xl:max-w-[40%] max-lg:max-w-[100%] min-w-[672px] max-2xl:min-w-[550px] max-xl:min-w-[420px] max-sm:min-w-[360px] max-xs:min-w-[300px]"
    >
      <span class="text-light-100 text-lg block mb-3 max-xl:mb-2">
        <!--        <TypeWrite-->
        <!--          :text="$t('mainPage.greeting')"-->
        <!--          hide-type-line-after-->
        <!--          :type-delay="100"-->
        <!--        />-->
        {{ $t("mainPage.greeting") }}
      </span>
      <h1
        class="text-light-100 text-[56px] max-xl:text-[48px] max-xs:text-[40px] mb-2 leading-[64px] max-xs:leading-[48px]"
      >
        <!--        <TypeWrite-->
        <!--          :text="$t('fullName')"-->
        <!--          hide-type-line-after-->
        <!--          :type-delay="100"-->
        <!--          :start-after="1200"-->
        <!--        />-->
        {{ $t("fullName") }}
      </h1>
      <div class="flex items-center gap-5 max-xs:gap-3">
        <span class="text-secondary-3 text-[32px]"> > </span>
        <span
          class="text-secondary-3 text-[32px] max-xl:text-[28px] max-xs:text-[22px]"
        >
          {{ $t("role") }}
        </span>
      </div>
      <div class="flex flex-col mt-20 max-lg:mt-[250px] max-xs:mt-[180px]">
        <div class="flex flex-col gap-1">
          <span class="text-secondary-1 text-base max-lg:hidden">
            // {{ $t("mainPage.enjoyTheGame") }}
          </span>
          <span class="text-secondary-1 text-base max-lg:hidden">
            // {{ $t("mainPage.seeInGithub") }}
          </span>
          <span class="text-secondary-1 text-base lg:hidden">
            // {{ $t("mainPage.findMyProfileInGithub") }}
          </span>
        </div>
      </div>
      <ClientOnly>
        <a
          :href="
            windowWidth > BreakpointsEnum.LG
              ? SocialMediaEnum.SNAKE_GAME_GITHUB
              : SocialMediaEnum.GITHUB
          "
          target="_blank"
        >
          <CodeHighlight
            class="max-lg:mt-[-2rem]"
            :code="codeSnippet"
            language="javascript"
            code-wrapper-class="!overflow-x-hidden"
            code-class="!overflow-x-hidden"
          />
        </a>
      </ClientOnly>
    </div>
    <div class="relative">
      <GamePad class="max-lg:!hidden" />
      <div class="green-bg"></div>
      <div class="purple-bg"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import { setPageLayout } from "#app";
// setPageLayout('custom');
import { SocialMediaEnum } from "~/enums/social-media.enum";
import { onBeforeMount, onMounted, onUnmounted, ref, useI18n } from "#imports";
import { BreakpointsEnum } from "~/enums/breakpoints.enum";

const { locale } = useI18n();
const windowWidth = ref();

import GamePad from "~/components/pages/index/GamePad.vue";
import CodeHighlight from "~/components/base/CodeHighlight.vue";
// import TypeWrite from "~/components/base/TypeWrite.vue";

const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

const codeSnippet = ref(``);

onBeforeMount(() => {
  handleResize();
  if (windowWidth.value >= BreakpointsEnum.LG) {
    codeSnippet.value = `
const githubLink =
 "${SocialMediaEnum.SNAKE_GAME_GITHUB}";`;
  } else {
    codeSnippet.value = `
const githubLink =
"${SocialMediaEnum.GITHUB}";`;
  }
});
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
