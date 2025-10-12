<template>
  <SelectRoot v-bind="$attrs">
    <slot />
  </SelectRoot>
</template>

<script>
import * as SelectPrimitive from '@radix-ui/vue-select';
const { Root: SelectRoot } = SelectPrimitive;

export default {
  name: 'Select',
  inheritAttrs: false,
  components: {
    SelectRoot,
  },
};
</script>
