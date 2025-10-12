<template>
  <DropdownMenuRoot v-bind="$attrs">
    <slot />
  </DropdownMenuRoot>
</template>

<script>
import * as DropdownMenuPrimitive from '@radix-ui/vue-dropdown-menu';
const { Root: DropdownMenuRoot } = DropdownMenuPrimitive;

export default {
  name: 'DropdownMenu',
  inheritAttrs: false,
  components: {
    DropdownMenuRoot,
  },
};
</script>
