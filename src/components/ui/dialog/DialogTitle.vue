<script setup lang="ts">
import { Dialog as DialogPrimitive } from 'radix-vue';
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <DialogPrimitive.Title
    :class="cn('text-lg font-semibold leading-none tracking-tight', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </DialogPrimitive.Title>
</template>
