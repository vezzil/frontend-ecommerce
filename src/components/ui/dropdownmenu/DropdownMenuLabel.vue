<template>
  <DropdownMenuLabelPrimitive
    :class="[
      'px-2 py-1.5 text-sm font-semibold',
      inset && 'pl-8',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </DropdownMenuLabelPrimitive>
</template>

<script>
import * as DropdownMenuPrimitive from '@radix-ui/vue-dropdown-menu';
const { Label: DropdownMenuLabelPrimitive } = DropdownMenuPrimitive;

export default {
  name: 'DropdownMenuLabel',
  inheritAttrs: false,
  components: {
    DropdownMenuLabelPrimitive,
  },
  props: {
    inset: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
