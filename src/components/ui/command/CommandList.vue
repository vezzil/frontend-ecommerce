<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
}>();

const listRef = ref<InstanceType<typeof CommandPrimitive.List>>();

defineExpose({
  element: listRef,
});
</script>

<template>
  <CommandPrimitive.List
    ref="listRef"
    :class="cn('max-h-[300px] overflow-y-auto overflow-x-hidden', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </CommandPrimitive.List>
</template>
