<template>
  <div class="wrapper content-wrapper">
    <Header />
    <div :class="['page-content', { 'is-index': isIndex }]">
      <slot></slot>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/layout/Header.vue";
import Footer from "~/components/layout/Footer.vue";
import { computed, useRoute } from "#imports";
import { RoutesEnum } from "~/enums/routes.enum";

const route = useRoute();

const isIndex = computed(() => {
  return route.path === RoutesEnum.HOME;
});
</script>

<style lang="scss" scoped>
.content-wrapper {
  //@apply border border-line-1 bg-primary-300 rounded-lg h-full mt-[70px] max-lg:mt-4 overflow-hidden;
  @apply xl:border border-line-1 bg-primary-300 xl:rounded-lg xl:h-full h-[100vh] xl:mt-[70px] overflow-hidden max-xl:flex
  max-xl:flex-col max-xl:justify-between;
}

.page-content {
  //@apply relative rounded-bl-lg rounded-br-lg flex flex-col py-4 h-[calc(100vh_-_245px)] max-lg:h-[calc(100vh_-_90px)];
  @apply relative rounded-bl-lg rounded-br-lg flex flex-col py-4 xl:h-[calc(100vh_-_245px)] h-[calc(100vh_-_109px)]
  max-lg:h-[calc(100vh_-_59px)] overflow-y-auto overflow-x-hidden;
  &.is-index {
    @apply overflow-y-hidden;
  }
}

.wrapper {
  //@apply 2xl:max-w-[1500px] xl:max-w-[1240px] lg:max-w-[980px] md:max-w-[752px] sm:max-w-[600px] xs:max-w-[470px] mx-4 xs:mx-auto;
  @apply 2xl:max-w-[1500px] xl:max-w-[1240px] max-xl:max-w-none mx-auto;
}
</style>
