<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const Comp = 'div';
</script>

<template>
  <Comp :class="cn('flex h-16 items-center px-4', $props.class)">
    <slot />
  </Comp>
</template>
