<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref, useI18n } from "#imports";

const { t, locale } = useI18n();
import BaseAccordion from "~/components/base/BaseAccordion.vue";
import BaseResizable from "~/components/base/BaseResizable.vue";
import { SocialMediaEnum } from "~/enums/social-media.enum";
import CodeHighlight from "~/components/base/CodeHighlight.vue";
import SendMailForm from "~/components/pages/contact-me/SendMailForm.vue";
import { BreakpointsEnum } from "~/enums/breakpoints.enum";

interface FormDataFace {
  userName: string;
  email: string;
  message: string;
}

const formData = ref<FormDataFace>({
  userName: "",
  email: "",
  message: "",
});
const formCode = computed(() => {
  return `
const button =
  document.querySelector('#sendBtn');

const message = {
  name: "${formData.value.userName.trim()}",
  email: "${formData.value.email.trim()}",
  message: "${formData.value.message.trim()}"
}

button.addEventListener("click", () => {
  form.send(message);
});`;
});

function formUpdate(data: FormDataFace) {
  formData.value.userName = data.userName;
  formData.value.email = data.email;
  formData.value.message = data.message;
}

// Size Settings

const windowWidth = ref();
const handleResize = () => {
  windowWidth.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
  handleResize();
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div class="flex max-lg:flex-col -my-4 h-[inherit]">
    <div class="text-base max-md:text-sm text-white p-6 lg:hidden">
      {{ $t("contactMe.pageTitle") }}
    </div>
    <div class="contact-links">
      <BaseAccordion
        :theme="windowWidth > BreakpointsEnum.LG ? 'dark' : 'light'"
        :title="t('contactMe.contacts')"
        :opened-default="true"
        class="max-lg:mb-[2px]"
      >
        <div class="py-4">
          <NuxtLink
            :to="SocialMediaEnum.GMAIL"
            class="flex items-center gap-2 text-secondary-1 hover:!text-white transition-all duration-75 cursor-pointer"
          >
            <svg
              width="17"
              height="15"
              viewBox="0 0 17 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.811096 0H15.4108C15.6259 0 15.8322 0.0854545 15.9844 0.237565C16.1365 0.389675 16.2219 0.59598 16.2219 0.811096V13.7886C16.2219 14.0038 16.1365 14.2101 15.9844 14.3622C15.8322 14.5143 15.6259 14.5997 15.4108 14.5997H0.811096C0.59598 14.5997 0.389675 14.5143 0.237565 14.3622C0.0854545 14.2101 0 14.0038 0 13.7886V0.811096C0 0.59598 0.0854545 0.389675 0.237565 0.237565C0.389675 0.0854545 0.59598 0 0.811096 0ZM8.15963 7.04275L2.95888 2.62633L1.90851 3.86244L8.17017 9.17918L14.3191 3.85838L13.2582 2.6312L8.16044 7.04275H8.15963Z"
                fill="#607B96"
              />
            </svg>
            <span
              class="text-base"
              v-text="SocialMediaEnum.GMAIL_TEXT_SHORT"
            ></span>
          </NuxtLink>
          <NuxtLink
            :to="SocialMediaEnum.PHONE"
            class="flex items-center gap-2 mt-2 text-secondary-1 hover:!text-white transition-all duration-75 cursor-pointer"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.221 12.496V15.6825C16.2211 15.9107 16.1347 16.1304 15.9791 16.2973C15.8236 16.4642 15.6105 16.5659 15.3829 16.5819C14.9891 16.6089 14.6674 16.6234 14.4187 16.6234C6.45507 16.6234 0 10.1683 0 2.20468C0 1.95596 0.0135175 1.63424 0.0414537 1.24043C0.0574246 1.01283 0.159129 0.799769 0.326046 0.644225C0.492962 0.488682 0.712664 0.402241 0.940819 0.402344H4.12735C4.23913 0.402231 4.34696 0.44367 4.4299 0.518613C4.51283 0.593555 4.56495 0.69665 4.57613 0.80787C4.59686 1.01514 4.61578 1.18005 4.63381 1.30531C4.8129 2.55517 5.17992 3.77076 5.72242 4.91089C5.80803 5.09112 5.75215 5.3065 5.58994 5.42185L3.64522 6.81145C4.83427 9.58205 7.04222 11.79 9.81282 12.979L11.2006 11.0379C11.2573 10.9586 11.3401 10.9017 11.4345 10.8772C11.5288 10.8527 11.6288 10.862 11.717 10.9037C12.857 11.4451 14.0723 11.8112 15.3217 11.9896C15.4469 12.0076 15.6118 12.0274 15.8173 12.0472C15.9284 12.0586 16.0312 12.1108 16.106 12.1937C16.1807 12.2767 16.2221 12.3844 16.2219 12.496H16.221Z"
                fill="#607B96"
              />
            </svg>
            <span class="text-base">
              {{ t("mobilePhone") }}
            </span>
          </NuxtLink>
        </div>
      </BaseAccordion>
      <BaseAccordion
        :theme="windowWidth > BreakpointsEnum.LG ? 'dark' : 'light'"
        :title="t('contactMe.findMeAlsoIn')"
        :opened-default="windowWidth > BreakpointsEnum.LG"
      >
        <div class="py-4 flex flex-col gap-2">
          <NuxtLink
            :to="SocialMediaEnum.INSTAGRAM"
            class="flex items-center gap-2 text-secondary-1 hover:!text-white transition-all duration-75 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <path
                d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"
                fill="#607B96"
              />
            </svg>
            <span class="text-base">Instagram</span>
          </NuxtLink>
        </div>
      </BaseAccordion>
    </div>
    <div
      class="2xl:w-[calc(100%_-_310px)] xl:w-[calc(100%_-_275px)] w-[calc(100%_-_250px)] max-lg:w-full flex pb-6"
    >
      <BaseResizable
        v-if="windowWidth > BreakpointsEnum.LG"
        :start-pane-min-width="300"
        :end-pane-min-width="300"
        start-pane-class="border-e border-line-1"
      >
        <template #left>
          <SendMailForm @update="formUpdate" />
        </template>
        <template #right>
          <div class="mx-auto mt-[100px] ps-16 max-2xl:ps-6">
            <CodeHighlight
              :code="formCode"
              language="javascript"
              :show-lines="true"
            ></CodeHighlight>
          </div>
        </template>
      </BaseResizable>
      <SendMailForm v-else @update="formUpdate" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-links {
  @apply w-[310px] max-2xl:w-[275px] max-xl:w-[250px] max-lg:w-full shrink-0 lg:border-e border-line-1;
}
</style>
