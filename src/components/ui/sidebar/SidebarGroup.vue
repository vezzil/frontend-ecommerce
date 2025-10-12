<script setup lang="ts">
import { cn } from '@/lib/utils';

defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const Comp = 'div';
</script>

<template>
  <Comp :class="cn('flex flex-col gap-1 p-2', $props.class)">
    <slot />
  </Comp>
</template>
