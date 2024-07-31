<script setup lang="ts">
import CodeSnippetCard from "~/components/common/CodeSnippetCard.vue";
</script>

<template>
  <div class="code-snippets">
    <div class="head"></div>
    <div class="content">
      <span class="title"> // {{ $t("aboutMe.codeSnippetShowcase") }} </span>
      <div class="snippet-cards">
        <CodeSnippetCard />
        <CodeSnippetCard />
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
    @apply pt-4 px-10 max-lg:px-8 max-md:px-6 max-sm:px-5 overflow-auto;
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
