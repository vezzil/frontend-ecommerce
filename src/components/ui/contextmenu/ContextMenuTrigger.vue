<script setup lang="ts">
import { ContextMenuTrigger as ContextMenuTriggerPrimitive } from 'radix-vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'ContextMenuTrigger',
  inheritAttrs: false,
});
</script>

<template>
  <ContextMenuTriggerPrimitive :class="cn('flex', $attrs.class)" v-bind="$attrs">
    <slot />
  </ContextMenuTriggerPrimitive>
</template>
