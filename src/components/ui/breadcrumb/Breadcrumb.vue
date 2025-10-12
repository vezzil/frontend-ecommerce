<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'Breadcrumb',
  inheritAttrs: false
});

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  separator: {
    type: [String, Object],
    default: undefined
  }
});

provide('breadcrumb', {
  separator: props.separator
});
</script>

<template>
  <nav 
    :class="cn('', props.class)" 
    aria-label="breadcrumb" 
    v-bind="$attrs"
  >
    <slot />
  </nav>
</template>
