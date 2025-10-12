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
  <DialogPrimitive.Description
    :class="cn('text-sm text-muted-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </DialogPrimitive.Description>
</template>
