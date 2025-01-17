<script setup lang="ts">
import BaseInput from "~/components/base/BaseInput.vue";
import BaseButton from "~/components/base/BaseButton.vue";
import { useI18n } from "vue-i18n";
import { ref, useFetch, watch } from "#imports";
import { useToasterStore } from "~/stores/useToasterStore";

const { t } = useI18n();
const toastStore = useToasterStore();

const emit = defineEmits(["update"]);
const formData = ref({
  userName: "",
  email: "",
  message: "",
});
const formIsLoading = ref(false);

watch(
  () => formData.value,
  (newVal) => {
    emit("update", newVal);
  },
  { immediate: true, deep: true },
);

function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

async function submitForm() {
  if (
    !formData.value.userName.trim() ||
    !formData.value.email.trim() ||
    !formData.value.message.trim()
  ) {
    return toastStore.warning({ text: t("contactMe.completeFormWarning") });
  }
  if (!isValidEmail(formData.value.email)) {
    return toastStore.error({ text: t("contactMe.invalidEmail") });
  }
  formIsLoading.value = true;
  const response: any = await useFetch("/api/contact", {
    method: "POST",
    body: {
      name: formData.value.userName,
      email: formData.value.email,
      message: formData.value.message,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  formIsLoading.value = false;
  if (response.data.value.success) {
    toastStore.success({ text: t("contactMe.emailSuccess") });
    formData.value.userName = "";
    formData.value.email = "";
    formData.value.message = "";
  } else {
    toastStore.error({ text: t("contactMe.emailError") });
    console.error("Error:", response.error);
  }
}
</script>

<template>
  <form
    class="lg:max-w-[370px] max-lg:w-full mx-auto mt-[100px] max-xl:mt-[75px] max-lg:mt-12 px-5 max-lg:mb-16"
    @submit.prevent="submitForm"
  >
    <BaseInput
      v-model="formData.userName"
      :placeholder="$t('contactMe.enterYourName')"
      label="_name"
    />
    <BaseInput
      wrapper-class="mt-6"
      v-model="formData.email"
      :placeholder="$t('contactMe.enterYourEmail')"
      label="_email"
    />
    <BaseInput
      wrapper-class="mt-6"
      v-model="formData.message"
      :placeholder="$t('contactMe.enterYourMessage')"
      label="_message"
      type="textarea"
      input-class="h-[200px]"
    />
    <div class="mt-6">
      <BaseButton
        mode="dark"
        type="submit"
        :loading="formIsLoading"
        class="!w-[146px]"
      >
        <span class="text-sm"> submit-message </span>
      </BaseButton>
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
