<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <span
    :class="cn('ml-auto text-xs tracking-widest text-muted-foreground', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </span>
</template>
