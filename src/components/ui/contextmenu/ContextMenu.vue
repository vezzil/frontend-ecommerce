<script setup lang="ts">
import { ContextMenuRoot, useForwardPropsEmits } from 'radix-vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'ContextMenu',
  inheritAttrs: false,
});

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  defaultOpen: {
    type: Boolean,
    default: false,
  },
  open: {
    type: Boolean,
    default: undefined,
  },
  modal: {
    type: Boolean,
    default: true,
  },
  dir: {
    type: String,
    default: undefined,
  },
});

const emits = defineEmits(['update:modelValue', 'openChange']);

const forwarded = useForwardPropsEmits(props, emits);
</script>

<template>
  <ContextMenuRoot v-bind="forwarded">
    <slot />
  </ContextMenuRoot>
</template>
