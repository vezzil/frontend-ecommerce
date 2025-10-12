<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'BreadcrumbPage',
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
  <span
    role="link"
    aria-disabled="true"
    aria-current="page"
    :class="cn('font-normal text-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>
