<script setup lang="ts">
import { computed, inject, ref } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AccordionItem',
  inheritAttrs: false
});

const props = defineProps({
  value: {
    type: String,
    required: true
  },
  disabled: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
});

const parent = inject<{
  activeItems: string | string[];
  updateModelValue: (value: string | string[]) => void;
}>('accordion');

const isActive = computed(() => {
  if (!parent) return false;
  if (Array.isArray(parent.activeItems)) {
    return parent.activeItems.includes(props.value);
  }
  return parent.activeItems === props.value;
});

const toggle = () => {
  if (!parent || props.disabled) return;
  
  if (Array.isArray(parent.activeItems)) {
    const newValue = isActive.value
      ? parent.activeItems.filter(item => item !== props.value)
      : [...parent.activeItems, props.value];
    parent.updateModelValue(newValue);
  } else {
    parent.updateModelValue(isActive.value ? '' : props.value);
  }
};
</script>

<template>
  <div 
    :class="cn('border-b', props.class)"
    v-bind="$attrs"
  >
    <slot 
      :is-active="isActive"
      :toggle="toggle"
      :disabled="props.disabled"
    />
  </div>
</template>
