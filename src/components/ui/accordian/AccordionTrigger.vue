<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AccordionTrigger',
  inheritAttrs: false
});

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const { isActive, toggle } = defineProps({
  isActive: {
    type: Boolean,
    required: true
  },
  toggle: {
    type: Function,
    required: true
  }
});
</script>

<template>
  <button
    :class="
      cn(
        'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline',
        isActive && 'text-primary',
        props.class
      )
    "
    :disabled="disabled"
    @click="toggle"
    v-bind="$attrs"
  >
    <slot />
    <ChevronDown
      :class="
        cn('h-4 w-4 shrink-0 transition-transform duration-200', {
          'rotate-180': isActive
        })
      "
    />
  </button>
</template>
