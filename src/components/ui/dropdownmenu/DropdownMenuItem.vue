<template>
  <DropdownMenuItemPrimitive
    :class="[
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
      'transition-colors focus:bg-accent focus:text-accent-foreground',
      'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      inset && 'pl-8',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </DropdownMenuItemPrimitive>
</template>

<script>
import * as DropdownMenuPrimitive from '@radix-ui/vue-dropdown-menu';
const { Item: DropdownMenuItemPrimitive } = DropdownMenuPrimitive;

export default {
  name: 'DropdownMenuItem',
  inheritAttrs: false,
  components: {
    DropdownMenuItemPrimitive,
  },
  props: {
    inset: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
