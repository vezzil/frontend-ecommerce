<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'BreadcrumbList',
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
  <ol 
    :class="cn('flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </ol>
</template>
