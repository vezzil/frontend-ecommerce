<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'Accordion',
  inheritAttrs: false
});

const props = defineProps({
  type: {
    type: String,
    default: 'single',
    validator: (value: string) => ['single', 'multiple'].includes(value)
  },
  defaultValue: {
    type: String,
    default: ''
  },
  collapsible: {
    type: Boolean,
    default: false
  },
  modelValue: {
    type: [String, Array],
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const activeItems = ref<string | string[]>(props.modelValue || props.defaultValue || '');

const updateModelValue = (value: string | string[]) => {
  activeItems.value = value;
  emit('update:modelValue', value);
};

defineExpose({
  activeItems,
  updateModelValue
});
</script>

<template>
  <div class="w-full" v-bind="$attrs">
    <slot :active-items="activeItems" :update="updateModelValue" />
  </div>
</template>
