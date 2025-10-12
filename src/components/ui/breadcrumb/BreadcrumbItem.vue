<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'BreadcrumbItem',
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
  <li 
    :class="cn('inline-flex items-center gap-1.5', props.class)" 
    v-bind="$attrs"
  >
    <slot />
  </li>
</template>
