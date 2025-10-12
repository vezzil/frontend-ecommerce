<script setup lang="ts">
import { provide, computed } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'FormItem',
});

const id = `form-item-${Math.random().toString(36).substr(2, 9)}`;

const itemContext = computed(() => ({
  id,
}));

provide('itemContext', itemContext.value);

defineSlots<{
  default: (props: {}) => VNode[];
}>();
</script>

<template>
  <div :class="cn('space-y-2', $attrs.class as string)">
    <slot />
  </div>
</template>
