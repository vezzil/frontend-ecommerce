<script setup lang="ts">
import { provide, ref } from 'vue';

defineOptions({
  name: 'AlertDialog',
  inheritAttrs: false
});

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(props.defaultOpen || props.modelValue);

const open = () => {
  isOpen.value = true;
  emit('update:modelValue', true);
};

const close = () => {
  isOpen.value = false;
  emit('update:modelValue', false);
};

watch(() => props.modelValue, (newVal) => {
  isOpen.value = newVal;
});

provide('alertDialog', {
  isOpen,
  open,
  close
});
</script>

<template>
  <slot :is-open="isOpen" :open="open" :close="close" />
</template>
