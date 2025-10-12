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
  <div :class="cn('flex flex-col space-y-1.5 text-center sm:text-left', props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>
