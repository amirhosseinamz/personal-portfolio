import {
  ref,
  reactive,
  computed,
  onMounted,
  defineComponent,
  watch,
} from "vue";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      ref,
      reactive,
      computed,
      onMounted,
      defineComponent,
      watch,
    },
  };
});
