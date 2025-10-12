<template>
  <div
    ref="sliderRef"
    class="relative flex w-full touch-none select-none items-center"
    :class="$attrs.class"
    v-bind="$attrs"
  >
    <div class="relative h-2 w-full grow overflow-hidden rounded-full bg-secondary">
      <div 
        class="absolute h-full bg-primary"
        :style="{
          left: '0%',
          width: `${(modelValue / max) * 100}%`
        }"
      />
    </div>
    <input
      type="range"
      :min="min"
      :max="max"
      :step="step"
      :value="modelValue"
      @input="handleInput"
      class="absolute h-full w-full cursor-pointer appearance-none opacity-0"
      :disabled="disabled"
    />
    <div
      v-if="showThumb" 
      class="absolute left-0 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
      :style="{ left: `${(modelValue / max) * 100}%` }"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import { cn } from '@/lib/utils';

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  max: {
    type: Number,
    default: 100,
  },
  step: {
    type: Number,
    default: 1,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  showThumb: {
    type: Boolean,
    default: true,
  },
});

const emit = defineEmits(['update:modelValue', 'change']);

const sliderRef = ref(null);

const handleInput = (event) => {
  const value = parseFloat(event.target.value);
  emit('update:modelValue', value);
  emit('change', value);
};

defineOptions({
  name: 'BaseSlider',
  inheritAttrs: false,
});
</script>
