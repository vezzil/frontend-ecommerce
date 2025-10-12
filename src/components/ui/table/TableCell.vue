<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'TableCell',
  inheritAttrs: false,
});

defineProps<{
  class?: string;
}>();
</script>

<template>
  <td 
    :class="cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', $props.class)" 
    v-bind="$attrs"
  >
    <slot />
  </td>
</template>
