<template>
  <DropdownMenuSeparatorPrimitive
    :class="['-mx-1 my-1 h-px bg-muted', $attrs.class]"
    v-bind="$attrs"
  />
</template>

<script>
import * as DropdownMenuPrimitive from '@radix-ui/vue-dropdown-menu';
const { Separator: DropdownMenuSeparatorPrimitive } = DropdownMenuPrimitive;

export default {
  name: 'DropdownMenuSeparator',
  inheritAttrs: false,
  components: {
    DropdownMenuSeparatorPrimitive,
  },
};
</script>
