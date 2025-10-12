<template>
  <img
    :src="src"
    :alt="alt"
    :class="cn('aspect-square h-full w-full', $attrs.class)"
    v-bind="$attrs"
  >
</template>

<script setup>
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AvatarImage',
  inheritAttrs: false,
});

defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});
</script>
