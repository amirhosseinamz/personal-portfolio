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
    <code :class="`language-${language}`" ref="codeRef">
      {{ code }}
    </code>
  </pre>
</template>

<style scoped>
code {
  @apply bg-[inherit] !p-0;
}
</style>
