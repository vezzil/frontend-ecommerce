<template>
  <div 
    ref="root"
    :class="cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', $attrs.class)"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils';
import { ref } from 'vue';

defineOptions({
  name: 'Avatar',
  inheritAttrs: false,
});

const root = ref(null);

defineExpose({
  root,
});
</script>
