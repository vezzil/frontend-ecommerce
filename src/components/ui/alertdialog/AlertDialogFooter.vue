<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AlertDialogFooter',
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
  <div 
    :class="cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', props.class)" 
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
