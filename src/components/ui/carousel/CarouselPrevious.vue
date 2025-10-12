<script setup lang="ts">
import { inject, computed } from 'vue';
import { ChevronLeft } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import Button from '../button/Button.vue';
import type { CarouselContextProps } from './types';

defineOptions({
  name: 'CarouselPrevious',
  inheritAttrs: false,
});

const context = inject<CarouselContextProps>('carousel');

if (!context) {
  throw new Error('CarouselPrevious must be used within a Carousel component');
}

const { orientation, scrollPrev, canScrollPrev } = context;

const props = withDefaults(defineProps<{
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'destructive' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  class?: string;
}>(), {
  variant: 'outline',
  size: 'icon',
});

const classes = computed(() =>
  cn(
    'absolute h-8 w-8 rounded-full',
    orientation === 'horizontal'
      ? '-left-12 top-1/2 -translate-y-1/2'
      : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
    props.class
  )
);
</script>

<template>
  <Button
    :variant="variant"
    :size="size"
    :class="classes"
    :disabled="!canScrollPrev"
    @click="scrollPrev"
    v-bind="$attrs"
  >
    <ChevronLeft class="h-4 w-4" />
    <span class="sr-only">Previous slide</span>
  </Button>
</template>
