<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  name: 'BreadcrumbLink',
  inheritAttrs: false
});

const props = defineProps({
  asChild: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <component
    :is="asChild ? 'slot' : 'a'"
    :class="cn('transition-colors hover:text-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </component>
</template>
