<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'TableBody',
  inheritAttrs: false,
});

defineProps<{
  class?: string;
}>();
</script>

<template>
  <tbody :class="cn('[&_tr:last-child]:border-0', $props.class)" v-bind="$attrs">
    <slot />
  </tbody>
</template>
