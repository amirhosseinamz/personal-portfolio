<script setup lang="ts">
interface PropsFace {
  name: string,
  id: string,
  value: string,
  modelValue: boolean,
}

const props = withDefaults(defineProps<PropsFace>(), {});
const emit = defineEmits(['update:modelValue']);

const onChange = (event: Event) => {
  const checked = (event.target as HTMLInputElement).checked;
  emit('update:modelValue', checked);
}
</script>

<template>
  <div class="special-checkbox">
    <input class="inp-cbx" type="checkbox" :name="props.name" :value="props.value"
           :checked="props.modelValue"
           @change="onChange" :id="props.id"/>
    <label class="cbx" :for="props.id">
      <span class="shape">
          <svg width="12px" height="10px">
            <use xlink:href="#check-4"></use>
          </svg>
      </span>
    </label>
    <svg class="inline-svg">
      <symbol id="check-4" viewbox="0 0 12 10">
        <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
      </symbol>
    </svg>
  </div>
</template>

<style scoped lang="scss">
.special-checkbox * {
  @apply box-border;
}

.special-checkbox {
  .cbx {
    @apply w-full select-none cursor-pointer rounded-[2px] overflow-hidden flex flex-row-reverse items-center;
    transition: all 0.2s ease;

    &:hover {
      span {
        &.shape {
          @apply border-secondary-1;
        }
      }
    }

    span {
      float: left;
      vertical-align: middle;
      transform: translate3d(0, 0, 0);

      &.shape {
        @apply relative min-w-[20px] min-h-[20px] w-5 h-5 scale-100 rounded-[2px] transition-[all_0.2s_ease] border border-secondary-1;
        box-shadow: 0 1px 1px rgba(0, 16, 75, 0.05);

        svg {
          @apply absolute top-1 left-1/2 -translate-x-1/2 fill-none stroke-white stroke-2;
          stroke-linecap: round;
          stroke-linejoin: round;
          stroke-dasharray: 16px;
          stroke-dashoffset: 16px;
          transition: all 100ms ease;
          transition-delay: 0.1s;
        }
      }
    }
  }
}

.special-checkbox .inp-cbx {
  @apply absolute invisible;
}

.special-checkbox .inp-cbx:checked + .cbx .shape {
  @apply bg-secondary-1 border-secondary-1;
  animation: wave-4 0.4s ease;
}

.special-checkbox .inp-cbx:checked + .cbx .shape svg {
  stroke-dashoffset: 0;
}

.special-checkbox .inline-svg {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}

@-moz-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}

@-webkit-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}

@-o-keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}

@keyframes wave-4 {
  50% {
    transform: scale(0.9);
  }
}
</style>