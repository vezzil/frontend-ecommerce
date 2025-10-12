<template>
  <SelectLabelPrimitive 
    :class="['py-1.5 pl-8 pr-2 text-sm font-semibold', $attrs.class]"
    v-bind="$attrs"
  >
    <slot />
  </SelectLabelPrimitive>
</template>

<script>
import * as SelectPrimitive from '@radix-ui/vue-select';
const { Label: SelectLabelPrimitive } = SelectPrimitive;

export default {
  name: 'SelectLabel',
  inheritAttrs: false,
  components: {
    SelectLabelPrimitive,
  },
};
</script>
