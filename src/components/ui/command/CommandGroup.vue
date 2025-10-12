<script setup lang="ts">
import { cn } from '@/lib/utils';
import { Command as CommandPrimitive } from 'cmdk';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
  heading?: string;
}>();

const groupRef = ref<InstanceType<typeof CommandPrimitive.Group>>();

defineExpose({
  element: groupRef,
});
</script>

<template>
  <CommandPrimitive.Group
    ref="groupRef"
    :class="
      cn(
        'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
        props.class,
      )
    "
    v-bind="$attrs"
  >
    <slot v-if="!$slots.heading" name="heading" />
    <div v-else-if="heading" class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
      {{ heading }}
    </div>
    <slot />
  </CommandPrimitive.Group>
</template>
