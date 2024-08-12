<script setup lang="ts">
import CodeSnippetCard from "~/components/common/CodeSnippetCard.vue";
import { ref, useI18n } from "#imports";
import { ICodeSnippet } from "~/types/about-me/about-me";

const { t } = useI18n();

const codeSnippets = ref<ICodeSnippet[]>([
  {
    id: 1,
    code: `
import { defineStore } from "pinia";

export type TToastStatus = "success" | "warning" | "error";
interface IToast {
  text: string;
  status: TToastStatus;
  id: number;
}
type ToastPayload = { timeout?: number; text: string };
const defaultTimeout = 3000;

const createToast = (text: string, status: TToastStatus): IToast => ({
  text,
  status,
  id: Math.random() * 10000,
});
export const useToasterStore = defineStore("toaster-store", {
  state: (): { toasts: IToast[] } => ({
    toasts: [],
  }),
  actions: {
    updateState(payload: ToastPayload, status: TToastStatus) {
      const { text, timeout } = payload;
      const toast = createToast(text, status);

      this.toasts.push(toast);

      // creating a delay to delete toast after its provided timeout is over
      setTimeout(() => {
        this.toasts = this.toasts.filter((t) => t.id !== toast.id);
      }, timeout ?? defaultTimeout);
    },
    success(payload: ToastPayload) {
      this.updateState(payload, "success");
    },

    warning(payload: ToastPayload) {
      this.updateState(payload, "warning");
    },

    error(payload: ToastPayload) {
      this.updateState(payload, "error");
    },
  },
});

//Usage
//Example.vue
import { useToasterStore } from "~/stores/useToasterStore";
const toastStore = useToasterStore();

toastStore.success({ text: "Hello world!" });
    `,
    createTime: "2024",
    username: "amirhosseinamz",
    img: "/images/avatar-me.jpg",
    description: t("aboutMe.codeSnippet.toastDescription"),
  },
  {
    id: 2,
    code: `
class DataFetcher {
  constructor() {
    this.cache = new Map();
  }

  async fetchData(url) {
    if (this.cache.has(url)) {
      console.log('Returning cached data');
      return this.cache.get(url);
    }

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    this.cache.set(url, data);
    console.log('Fetching new data');
    return data;
  }
}

// Usage
const dataFetcher = new DataFetcher();
dataFetcher.fetchData('
https://jsonplaceholder.typicode.com/posts/1
')
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`,
    createTime: "2024",
    username: "amirhosseinamz",
    img: "/images/avatar-me.jpg",
    description: t("aboutMe.codeSnippet.dataFetcherDescription"),
  },
]);
</script>

<template>
  <div class="code-snippets">
    <div class="head"></div>
    <div class="content">
      <span class="title"> // {{ $t("aboutMe.codeSnippetShowcase") }} </span>
      <div class="snippet-cards">
        <CodeSnippetCard
          v-for="snippet in codeSnippets"
          :key="snippet.id"
          :data="snippet"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.code-snippets {
  @apply flex flex-col w-full h-full;
  .head {
    @apply h-10 border-b border-line-1 w-full shrink-0 sticky top-0 bg-primary-300 max-lg:hidden;
  }

  .content {
    @apply pt-4 px-6 max-lg:px-8 max-md:px-6 max-sm:px-5 overflow-auto;
    .title {
      @apply text-secondary-1 max-lg:text-white text-base block mb-[56px] max-lg:mb-6 max-lg:mt-8;
    }

    .snippet-cards {
      @apply flex flex-col gap-[30px];
    }
  }
}

::-webkit-scrollbar {
  @apply xl:w-4 w-3 border-l border-line-1;
}

::-webkit-scrollbar-track {
  @apply bg-primary-300;
}

::-webkit-scrollbar-thumb {
  @apply bg-secondary-1;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-secondary-1;
}
</style>
