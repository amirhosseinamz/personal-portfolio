<script setup lang="ts">
import { SocialMediaEnum } from "~/enums/social-media.enum";
import BaseIcon from "~/components/base/base-icon/BaseIcon.vue";
</script>

<template>
  <div class="footer">
    <div class="info">
      <div class="info_item">{{ $t("findMeIn") }}:</div>
      <a :href="SocialMediaEnum.INSTAGRAM" class="info_item" target="_blank">
        <BaseIcon name="instagram" />
      </a>
      <a :href="SocialMediaEnum.TELEGRAM" class="info_item" target="_blank">
        <BaseIcon name="telegram" />
      </a>
      <a :href="SocialMediaEnum.GITHUB" class="info_item gap-1" target="_blank">
        <span class="max-sm:hidden">
          @{{ SocialMediaEnum.GITHUB_USERNAME }}
        </span>
        <BaseIcon name="github" />
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply w-full h-[50px] border-t border-line-1 xl:rounded-bl-lg xl:rounded-br-lg max-lg:fixed max-lg:bottom-0 z-10 bg-primary-300;
  .info {
    @apply h-full flex items-center;
    &_item {
      @apply cursor-pointer h-full border-e border-line-1 flex items-center justify-center px-4 text-secondary-1;
      &:first-child {
        @apply max-sm:w-full max-sm:justify-start;
      }

      &:last-child {
        @apply sm:ms-auto border-e-0 border-s max-sm:border-s-0 px-4 sm:px-[22px];
      }
    }
  }
}
</style>
