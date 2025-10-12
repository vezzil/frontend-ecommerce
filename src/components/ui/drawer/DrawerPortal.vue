<script setup lang="ts">
import { Dialog as DrawerPrimitive } from 'radix-vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  to?: string | HTMLElement;
  :disabled?: boolean;
}>();
</script>

<template>
  <DrawerPrimitive.Portal :to="props.to" :disabled="props.disabled">
    <slot />
  </DrawerPrimitive.Portal>
</template>
