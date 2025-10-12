<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
  disabled?: boolean;
  value?: string;
}>();

const itemRef = ref<InstanceType<typeof CommandPrimitive.Item>>();

defineExpose({
  element: itemRef,
});
</script>

<template>
  <CommandPrimitive.Item
    ref="itemRef"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled=true]:pointer-events-none data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground data-[disabled=true]:opacity-50',
        props.class,
      )
    "
    :disabled="props.disabled"
    :value="props.value"
    v-bind="$attrs"
  >
    <slot />
  </CommandPrimitive.Item>
</template>
