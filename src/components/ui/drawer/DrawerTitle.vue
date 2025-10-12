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
  <DrawerPrimitive.Title
    :class="cn('text-lg font-semibold leading-none tracking-tight', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </DrawerPrimitive.Title>
</template>
