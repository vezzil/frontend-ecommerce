<template>
  <component
    :is="type === 'up' ? SelectScrollUpButtonPrimitive : SelectScrollDownButtonPrimitive"
    :class="['flex cursor-default items-center justify-center py-1', $attrs.class]"
    v-bind="$attrs"
  >
    <component :is="type === 'up' ? ChevronUp : ChevronDown" class="h-4 w-4" />
  </component>
</template>

<script>
import { ChevronUp, ChevronDown } from 'lucide-vue-next';
import * as SelectPrimitive from '@radix-ui/vue-select';
const { 
  ScrollUpButton: SelectScrollUpButtonPrimitive,
  ScrollDownButton: SelectScrollDownButtonPrimitive 
} = SelectPrimitive;

export default {
  name: 'SelectScrollButton',
  inheritAttrs: false,
  components: {
    SelectScrollUpButtonPrimitive,
    SelectScrollDownButtonPrimitive,
    ChevronUp,
    ChevronDown,
  },
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ['up', 'down'].includes(value),
    },
  },
};
</script>
