<script setup lang="ts">
import Footer from "~/components/layout/Footer.vue";
import {RoutesEnum} from "~/enums/routes.enum";

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void;
}>();


const isOpen = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
const toggleMenu = () => {
  emit('update:modelValue', !isOpen.value);
};
</script>

<template>
  <Transition name="start-to-end">
    <div v-if="isOpen" class="hamburger-menu">
      <div class="navigation-menu">
        <NuxtLink :to="RoutesEnum.HOME" class="navigation-menu_item">
          {{ $t('header.homeTab') }}
        </NuxtLink>
        <NuxtLink :to="RoutesEnum.ABOUT_ME" class="navigation-menu_item">
          {{ $t('header.aboutMeTab') }}
        </NuxtLink>
        <NuxtLink :to="RoutesEnum.PROJECTS" class="navigation-menu_item">
          {{ $t('header.projectsTab') }}
        </NuxtLink>
        <NuxtLink :to="RoutesEnum.CONTACT_ME" class="navigation-menu_item">
          {{ $t('header.contactMeTab') }}
        </NuxtLink>
      </div>
      <Footer/>
    </div>
  </Transition>
</template>

<style scoped lang="scss">
@import "assets/sass/transitions/directions";

.hamburger-menu {
  @apply absolute start-0 w-full top-0 h-full bg-primary-300 z-[5] flex flex-col justify-between lg:hidden;
  .navigation-menu {
    @apply flex flex-col;
    &_item {
      @apply h-[55px] flex items-center justify-start ps-[18px] border-b border-line-1 cursor-pointer text-white text-base;
    }
  }
}
</style>