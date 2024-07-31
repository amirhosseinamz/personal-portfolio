<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import { RoutesEnum } from "~/enums/routes.enum";
import { computed, useRoute } from "#imports";

const route = useRoute();

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (event: "update:modelValue", value: boolean): void;
}>();

const isOpen = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
const toggleMenu = () => {
  emit("update:modelValue", !isOpen.value);
};
</script>

<template>
  <Transition name="start-to-end">
    <div v-if="isOpen" class="hamburger-menu">
      <div class="navigation-menu">
        <NuxtLink
          @click="toggleMenu"
          :to="RoutesEnum.HOME"
          class="navigation-menu_item"
          :class="{ active: route.path === RoutesEnum.HOME }"
        >
          {{ $t("header.homeTab") }}
        </NuxtLink>
        <NuxtLink
          @click="toggleMenu"
          :to="RoutesEnum.ABOUT_ME"
          class="navigation-menu_item"
          :class="{ active: route.path === RoutesEnum.ABOUT_ME }"
        >
          {{ $t("header.aboutMeTab") }}
        </NuxtLink>
        <NuxtLink
          @click="toggleMenu"
          :to="RoutesEnum.PROJECTS"
          class="navigation-menu_item"
          :class="{ active: route.path === RoutesEnum.PROJECTS }"
        >
          {{ $t("header.projectsTab") }}
        </NuxtLink>
        <NuxtLink
          @click="toggleMenu"
          :to="RoutesEnum.CONTACT_ME"
          class="navigation-menu_item"
          :class="{ active: route.path === RoutesEnum.CONTACT_ME }"
        >
          {{ $t("header.contactMeTab") }}
        </NuxtLink>
      </div>
      <!--      <Footer />-->
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import "assets/sass/transitions/directions";

.hamburger-menu {
  @apply fixed start-0 w-full h-[calc(100%_-_104px)] top-[57px] bg-primary-300 z-[5] flex flex-col justify-between lg:hidden;
  .navigation-menu {
    @apply flex flex-col;
    &_item {
      @apply h-[55px] flex items-center justify-start ps-[18px] border-b border-line-1 cursor-pointer text-white text-base;
      &.active {
        @apply text-secondary-3;
      }
    }
  }
}
</style>
