<script setup lang="ts">
import { Dialog as DialogPrimitive } from 'radix-vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  open?: boolean;
  defaultOpen?: boolean;
  modal?: boolean;
}>();

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const open = computed({
  get: () => props.open,
  set: (value) => emit('update:open', value),
});
</script>

<template>
  <DialogPrimitive v-bind="$attrs" v-model:open="open" :default-open="defaultOpen" :modal="modal">
    <slot />
  </DialogPrimitive>
</template>
