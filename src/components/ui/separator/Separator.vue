<script setup lang="ts">
import { Separator as SeparatorPrimitive } from '@radix-ui/vue-separator';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'Separator',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  /**
   * The orientation of the separator
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether the separator is purely decorative
   * @default true
   */
  decorative?: boolean;
  /**
   * Additional class names to apply to the separator
   */
  class?: string;
}>(), {
  orientation: 'horizontal',
  decorative: true,
});

const orientationClass = computed(() => 
  props.orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]'
);
</script>

<template>
  <SeparatorPrimitive
    :decorative="decorative"
    :orientation="orientation"
    :class="cn(
      'shrink-0 bg-border',
      orientationClass,
      props.class
    )"
    v-bind="$attrs"
  />
</template>
