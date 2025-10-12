<template>
  <SelectTriggerPrimitive
    :class="[
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm',
      'ring-offset-background placeholder:text-muted-foreground',
      'focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      'disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDown class="h-4 w-4 opacity-50" />
    </SelectIcon>
  </SelectTriggerPrimitive>
</template>

<script>
import { ChevronDown } from 'lucide-vue-next';
import * as SelectPrimitive from '@radix-ui/vue-select';
const { Trigger: SelectTriggerPrimitive, Icon: SelectIcon } = SelectPrimitive;

export default {
  name: 'SelectTrigger',
  inheritAttrs: false,
  components: {
    SelectTriggerPrimitive,
    SelectIcon,
    ChevronDown,
  },
};
</script>
