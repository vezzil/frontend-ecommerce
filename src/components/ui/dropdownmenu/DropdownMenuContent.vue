<template>
  <DropdownMenuPortal>
    <DropdownMenuContentPrimitive
      :side-offset="sideOffset"
      :class="[
        'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
        'data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2',
        'data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        $attrs.class,
      ]"
      v-bind="$attrs"
    >
      <slot />
    </DropdownMenuContentPrimitive>
  </DropdownMenuPortal>
</template>

<script>
import * as DropdownMenuPrimitive from '@radix-ui/vue-dropdown-menu';
const { Content: DropdownMenuContentPrimitive, Portal: DropdownMenuPortal } = DropdownMenuPrimitive;

export default {
  name: 'DropdownMenuContent',
  inheritAttrs: false,
  components: {
    DropdownMenuContentPrimitive,
    DropdownMenuPortal,
  },
  props: {
    sideOffset: {
      type: Number,
      default: 4,
    },
  },
};
</script>
