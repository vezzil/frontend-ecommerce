<script setup>
import { cn } from '@/lib/utils';
import { X } from 'lucide-vue-next';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
  as: {
    type: [String, Object],
    default: 'button',
  },
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  emit('click', event);
};
</script>

<template>
  <component
    :is="props.as"
    :class="
      cn(
        'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
        props.class,
      )
    "
    v-bind="$attrs"
    @click="handleClick"
  >
    <slot>
      <X class="h-4 w-4" />
    </slot>
  </component>
</template>
