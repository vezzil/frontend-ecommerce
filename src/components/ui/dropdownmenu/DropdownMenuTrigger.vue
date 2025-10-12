<template>
  <DropdownMenuTriggerPrimitive v-bind="$attrs">
    <slot />
  </DropdownMenuTriggerPrimitive>
</template>

<script>
import * as DropdownMenuPrimitive from '@radix-ui/vue-dropdown-menu';
const { Trigger: DropdownMenuTriggerPrimitive } = DropdownMenuPrimitive;

export default {
  name: 'DropdownMenuTrigger',
  inheritAttrs: false,
  components: {
    DropdownMenuTriggerPrimitive,
  },
};
</script>
