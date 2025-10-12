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
  <DrawerPrimitive.Description
    :class="cn('text-sm text-muted-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </DrawerPrimitive.Description>
</template>
