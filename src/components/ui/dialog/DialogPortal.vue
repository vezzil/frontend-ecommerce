<script setup lang="ts">
import { Dialog as DialogPrimitive } from 'radix-vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  to?: string | HTMLElement;
  :disabled?: boolean;
}>();
</script>

<template>
  <DialogPrimitive.Portal :to="props.to" :disabled="props.disabled">
    <slot />
  </DialogPrimitive.Portal>
</template>
