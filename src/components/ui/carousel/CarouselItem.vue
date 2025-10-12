<script setup lang="ts">
import { inject, computed } from 'vue';
import { cn } from '@/lib/utils';
import type { CarouselContextProps } from './types';

defineOptions({
  name: 'CarouselItem',
  inheritAttrs: false,
});

const context = inject<CarouselContextProps>('carousel');

if (!context) {
  throw new Error('CarouselItem must be used within a Carousel component');
}

const { orientation } = context;

const classes = computed(() =>
  cn(
    'min-w-0 shrink-0 grow-0 basis-full',
    orientation === 'horizontal' ? 'pl-4' : 'pt-4',
    typeof props.class === 'string' ? props.class : ''
  )
);

const props = defineProps<{
  class?: string;
}>();
</script>

<template>
  <div
    role="group"
    aria-roledescription="slide"
    :class="classes"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
