<script setup lang="ts">
import HamburgerMenu from "~/components/layout/HamburgerMenu.vue";
import {RoutesEnum} from "~/enums/routes.enum";
import {useRoute} from "#app";

const route = useRoute();

const hamburgerMenuIsOpen = ref(false);

onMounted(() => {
  console.log(route.path)
})
</script>

<template>
  <div class="header">
    <div class="flex items-center h-full">
      <div
          class="w-[310px] max-xl:w-[250px] h-full border-e border-line-1 flex items-center justify-start text-secondary-1 ps-[22px]">
        {{ $t('fullName') }}
      </div>
      <div class="navigation-menu">
        <NuxtLink :to="RoutesEnum.HOME" class="navigation-menu_item" :class="{active: route.path === '/'}">
          {{ $t('header.homeTab') }}
        </NuxtLink>
        <NuxtLink :to="RoutesEnum.ABOUT_ME" class="navigation-menu_item" :class="{active: route.path === '/about-me'}">
          {{ $t('header.aboutMeTab') }}
        </NuxtLink>
        <NuxtLink :to="RoutesEnum.PROJECTS" class="navigation-menu_item" :class="{active: route.path === '/projects'}">
          {{ $t('header.projectsTab') }}
        </NuxtLink>
        <NuxtLink :to="RoutesEnum.CONTACT_ME" class="navigation-menu_item"
                  :class="{active: route.path === '/contact-me'}">{{ $t('header.contactMeTab') }}
        </NuxtLink>
      </div>
      <div class="hamburger-icon" @click="hamburgerMenuIsOpen = !hamburgerMenuIsOpen">
        <div class="icon" :class="{'open': hamburgerMenuIsOpen}">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <ClientOnly>
      <Teleport to=".page-content">
        <HamburgerMenu v-model="hamburgerMenuIsOpen"/>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply h-[57px] rounded-tl-lg rounded-tr-lg border-b border-line-1 w-full max-lg:pe-[18px] relative;
  .navigation-menu {
    @apply flex items-center h-full flex-grow max-lg:hidden;
    &_item {
      @apply px-8 h-full border-e border-line-1 flex items-center justify-center text-base whitespace-nowrap cursor-pointer;
      &:last-of-type {
        @apply border-e-0 border-s max-xl:border-s-0 max-xl:border-e ms-auto max-xl:ms-0;
      }

      &.active {
        @apply text-white border-b-[3px] border-b-accent-1;
      }
    }
  }

  .hamburger-icon {
    @apply ms-auto lg:hidden cursor-pointer;
    .icon {
      @apply w-[18px] h-4 relative rotate-0 transition-[0.4s_ease-in-out] cursor-pointer;
      span {
        @apply block absolute h-[2px] w-full bg-secondary-1 opacity-100 start-0 rotate-0 transition-[0.25s_ease-in-out];
        &:nth-child(1) {
          @apply top-0;
        }

        &:nth-child(2) {
          @apply top-[7px];
        }

        &:nth-child(3) {
          @apply top-[14px];
        }
      }

      &.open {
        span {
          &:nth-child(1) {
            @apply top-[7px] rotate-[135deg];
          }

          &:nth-child(2) {
            @apply opacity-0 -start-3;
          }

          &:nth-child(3) {
            @apply top-[7px] rotate-[-135deg];
          }
        }
      }
    }
  }
}
</style>