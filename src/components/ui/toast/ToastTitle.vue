<script setup>
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div :class="cn('text-sm font-semibold', props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>
