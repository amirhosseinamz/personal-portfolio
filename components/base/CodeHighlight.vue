<script setup>
import { ref, onMounted, watch } from "vue";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: "javascript",
  },
  codeClass: {
    type: String,
  },
  showLines: {
    type: Boolean,
    default: false,
  },
});

const codeRef = ref(null);
const lines = ref([]);

const highlightCode = async () => {
  if (codeRef.value) {
    // Clear existing highlighted classes and reset inner content
    codeRef.value.classList.remove("hljs");
    codeRef.value.textContent = props.code;
    // Unset the dataset.highlighted attribute if it exists
    delete codeRef.value.dataset.highlighted;

    // Generate line numbers
    lines.value = props.code.split("\n").map((_, i) => i + 1);

    // Wait for DOM updates to complete
    await nextTick();
    // Apply highlighting
    hljs.highlightElement(codeRef.value);
  }
};

onMounted(highlightCode);
watch(() => props.code, highlightCode);
</script>
<template>
  <div class="code-container">
    <div class="line-numbers" v-if="showLines">
      <div v-for="line in lines" :key="line" class="line-number">
        {{ line }}
      </div>
    </div>
    <pre class="highlightjs">
    <code :class="`language-${language} ${codeClass}`" ref="codeRef">
      {{ code }}
    </code>
  </pre>
  </div>
</template>

<style scoped>
.code-container {
  @apply flex;
}

.line-numbers {
  @apply text-secondary-1 text-right pr-2.5 select-none mt-12;
}

.line-number {
  @apply p-[0_5px];
}

.highlightjs {
  @apply overflow-x-auto whitespace-pre m-0;
}

code {
  @apply bg-[inherit] !p-0;
}

::-webkit-scrollbar {
  @apply h-2 border-l border-line-1;
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
