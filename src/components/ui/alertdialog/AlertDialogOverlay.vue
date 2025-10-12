<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AlertDialogOverlay',
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
    :class="
      cn(
        'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        props.class
      )
    "
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
