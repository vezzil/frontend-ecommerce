<script setup lang="ts">
import { Dialog as DrawerPrimitive } from 'radix-vue';
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <DrawerPrimitive.Overlay
    :class="cn('fixed inset-0 z-50 bg-black/80', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </DrawerPrimitive.Overlay>
</template>
