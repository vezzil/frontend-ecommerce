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
  <div :class="cn('grid gap-1.5 p-4 text-center sm:text-left', props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>
