<template>
  <DropdownMenuCheckboxItemPrimitive
    :class="[
      'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <DropdownMenuItemIndicator>
        <Check class="h-4 w-4" />
      </DropdownMenuItemIndicator>
    </span>
    <slot />
  </DropdownMenuCheckboxItemPrimitive>
</template>

<script>
import { Check } from 'lucide-vue-next';
import * as DropdownMenuPrimitive from '@radix-ui/vue-dropdown-menu';
const { CheckboxItem: DropdownMenuCheckboxItemPrimitive, ItemIndicator: DropdownMenuItemIndicator } = DropdownMenuPrimitive;

export default {
  name: 'DropdownMenuCheckboxItem',
  inheritAttrs: false,
  components: {
    DropdownMenuCheckboxItemPrimitive,
    DropdownMenuItemIndicator,
    Check,
  },
};
</script>
