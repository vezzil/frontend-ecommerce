<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AlertDialogHeader',
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
  <div :class="cn('flex flex-col space-y-2 text-center sm:text-left', props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>
