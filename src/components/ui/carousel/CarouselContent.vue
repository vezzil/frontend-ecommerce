<script setup lang="ts">
import { inject, computed } from 'vue';
import { cn } from '@/lib/utils';
import type { CarouselContextProps } from './types';

defineOptions({
  name: 'CarouselContent',
  inheritAttrs: false,
});

const context = inject<CarouselContextProps>('carousel');

if (!context) {
  throw new Error('CarouselContent must be used within a Carousel component');
}

const { carouselRef, orientation } = context;

const classes = computed(() =>
  cn(
    'flex',
    orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
    typeof props.class === 'string' ? props.class : ''
  )
);

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div :class="classes" v-bind="$attrs">
      <slot />
    </div>
  </div>
</template>
