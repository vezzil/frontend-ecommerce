<script setup lang="ts">
import { ref, provide, watch, computed } from 'vue';

defineOptions({
  name: 'Collapsible',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  modelValue?: boolean;
  defaultOpen?: boolean;
  disabled?: boolean;
  class?: string;
}>(), {
  modelValue: undefined,
  defaultOpen: false,
  disabled: false,
});

const emit = defineEmits<{
  'update:modelValue': [open: boolean];
  'openChange': [open: boolean];
}>();

// Use modelValue if provided, otherwise use local state
const localOpen = ref(props.defaultOpen);
const isOpen = computed(() => 
  props.modelValue !== undefined ? props.modelValue : localOpen.value
);

const toggle = () => {
  if (props.disabled) return;
  
  const newValue = !isOpen.value;
  
  if (props.modelValue === undefined) {
    localOpen.value = newValue;
  }
  
  emit('update:modelValue', newValue);
  emit('openChange', newValue);
};

// Provide context to child components
provide('collapsible', {
  open: isOpen,
  disabled: computed(() => props.disabled),
  toggle,
});

// Watch for external changes to modelValue
watch(() => props.modelValue, (newValue) => {
  if (newValue !== undefined) {
    localOpen.value = newValue;
  }
});
</script>

<template>
  <div :class="cn('w-full', props.class)" v-bind="$attrs">
    <slot :open="isOpen" :toggle="toggle" />
  </div>
</template>
