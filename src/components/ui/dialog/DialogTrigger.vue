<script setup lang="ts">
import { Dialog as DialogPrimitive } from 'radix-vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  asChild?: boolean;
  as?: string | object;
}>();
</script>

<template>
  <DialogPrimitive.Trigger v-bind="$attrs" :as-child="asChild" :as="as">
    <slot />
  </DialogPrimitive.Trigger>
</template>
