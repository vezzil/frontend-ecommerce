<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
  loop?: boolean;
}>();

const commandRef = ref<InstanceType<typeof CommandPrimitive>>();

defineExpose({
  element: commandRef,
});
</script>

<template>
  <CommandPrimitive
    ref="commandRef"
    :class="
      cn(
        'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
        props.class,
      )
    "
    :loop="props.loop"
    v-bind="$attrs"
  >
    <slot />
  </CommandPrimitive>
</template>
