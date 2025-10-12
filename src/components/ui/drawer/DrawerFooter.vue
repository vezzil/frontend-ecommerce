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
  <div :class="cn('mt-auto flex flex-col gap-2 p-4', props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>
