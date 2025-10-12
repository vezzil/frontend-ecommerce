<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'TableRow',
  inheritAttrs: false,
});

defineProps<{
  class?: string;
  selected?: boolean;
}>();
</script>

<template>
  <tr 
    :class="cn(
      'border-b transition-colors hover:bg-muted/50',
      { 'bg-muted': selected },
      $props.class
    )"
    :data-state="selected ? 'selected' : undefined"
    v-bind="$attrs"
  >
    <slot />
  </tr>
</template>
