<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const Comp = 'div';
</script>

<template>
  <Comp :class="cn('flex-1 overflow-y-auto overflow-x-hidden px-3 py-2', $props.class)">
    <slot />
  </Comp>
</template>
