<script setup>
import {ref, onMounted, watch} from 'vue'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String,
    default: 'javascript',
  },
  codeClass: {
    type: String,
  }
})

const codeRef = ref(null)

const highlightCode = () => {
  if (codeRef.value) {
    hljs.highlightElement(codeRef.value)
  }
}

onMounted(highlightCode)
watch(() => props.code, highlightCode)
</script>
<template>
  <pre class="highlightjs">
    <code :class="`language-${language} ${codeClass}`" ref="codeRef">
      {{ code }}
    </code>
  </pre>
</template>

<style scoped>
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
