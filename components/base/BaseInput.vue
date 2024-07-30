<script setup lang="ts">
interface PropsFace {
  placeholder?: string;
  modelValue: string;
  label?: string;
  type?: "text" | "textarea";
  wrapperClass?: string;
  inputClass?: string;
}

const props = withDefaults(defineProps<PropsFace>(), {
  type: "text",
});
const emit = defineEmits(["update:modelValue"]);

function updateInput(e: Event): void {
  const target = e.target as HTMLInputElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div v-if="props.type === 'text'" class="base-input" :class="wrapperClass">
    <span v-if="props.label" class="label">{{ props.label }}</span>
    <input
      type="text"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="updateInput"
      :class="inputClass"
    />
  </div>
  <div
    v-else-if="props.type === 'textarea'"
    class="base-input"
    :class="wrapperClass"
  >
    <span v-if="props.label" class="label">{{ props.label }}</span>
    <textarea
      :placeholder="props.placeholder"
      v-model="props.modelValue"
      @input="updateInput"
      :class="inputClass"
    >
    </textarea>
  </div>
</template>

<style scoped lang="scss">
.base-input {
  @apply flex flex-col;
  .label {
    @apply text-base text-secondary-1 block mb-2;
  }

  input,
  textarea {
    @apply rounded-lg bg-primary-400 border border-line-1 ps-4 text-base transition-all duration-75 placeholder-[#465E77];
    &:focus {
      @apply border-secondary-1 shadow-[0_0_0_2px_rgba(96,123,150,0.3)];
    }
  }

  input {
    @apply h-10;
  }

  textarea {
    @apply resize-none pt-2;
  }
}

::-webkit-scrollbar {
  @apply w-1 border-l border-line-1;
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
