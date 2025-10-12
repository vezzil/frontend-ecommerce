<template>
  <div
    ref="root"
    :class="cn('relative h-4 w-full overflow-hidden rounded-full bg-secondary', $attrs.class)"
    v-bind="$attrs"
  >
    <div
      class="h-full flex-1 bg-primary transition-all duration-300 ease-in-out"
      :style="{ transform: `translateX(-${100 - (modelValue || 0)}%)` }"
    />
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils';
import { ref } from 'vue';

defineOptions({
  name: 'BaseProgress',
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
    validator: (value) => {
      return value >= 0 && value <= 100;
    },
  },
});

const root = ref(null);

defineExpose({
  root,
});
</script>
