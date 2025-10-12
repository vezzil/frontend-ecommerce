<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AlertDialogTitle',
  inheritAttrs: false
});

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <h2 :class="cn('text-lg font-semibold', props.class)" v-bind="$attrs">
    <slot />
  </h2>
</template>
