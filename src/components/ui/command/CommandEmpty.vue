<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <CommandPrimitive.Empty :class="cn('py-6 text-center text-sm', props.class)" v-bind="$attrs">
    <slot />
  </CommandPrimitive.Empty>
</template>
