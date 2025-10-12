<script setup lang="ts">
import { ref, provide, onMounted, onUnmounted, watch, computed } from 'vue';
import { useEmblaCarousel } from 'embla-carousel-vue';
import { cn } from '@/lib/utils';
import type { CarouselProps, CarouselContextProps } from './types';

const props = withDefaults(defineProps<CarouselProps>(), {
  orientation: 'horizontal',
});

const emit = defineEmits<{
  'update:modelValue': [value: any];
  'select': [api: any];
  'init': [api: any];
  'reInit': [api: any];
  'destroy': [];
}>();

const [carouselRef, emblaApi] = useEmblaCarousel(
  {
    ...props.opts,
    axis: props.orientation === 'horizontal' ? 'x' : 'y',
  },
  props.plugins
);

const canScrollPrev = ref(false);
const canScrollNext = ref(false);

const onSelect = (api: any) => {
  if (!api) return;
  
  canScrollPrev.value = api.canScrollPrev();
  canScrollNext.value = api.canScrollNext();
  emit('select', api);
};

const scrollPrev = () => {
  emblaApi.value?.scrollPrev();
};

const scrollNext = () => {
  emblaApi.value?.scrollNext();
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowLeft') {
    event.preventDefault();
    scrollPrev();
  } else if (event.key === 'ArrowRight') {
    event.preventDefault();
    scrollNext();
  }
};

watch(emblaApi, (api) => {
  if (!api) return;
  
  if (props.setApi) {
    props.setApi(api);
  }
  
  onSelect(api);
  
  api.on('select', onSelect);
  api.on('reInit', onSelect);
  
  // Emit init event when the carousel is ready
  emit('init', api);
  
  // Cleanup
  onUnmounted(() => {
    api.off('select', onSelect);
    api.off('reInit', onSelect);
    emit('destroy');
  });
});

// Provide context to child components
const context = computed<CarouselContextProps>(() => ({
  carouselRef,
  api: emblaApi.value,
  scrollPrev,
  scrollNext,
  canScrollPrev: canScrollPrev.value,
  canScrollNext: canScrollNext.value,
  orientation: props.orientation || (props.opts?.axis === 'y' ? 'vertical' : 'horizontal'),
  opts: props.opts,
}));

provide('carousel', context);
</script>

<template>
  <div
    ref="carousel"
    @keydown.arrow-left="handleKeyDown"
    @keydown.arrow-right="handleKeyDown"
    :class="cn('relative', $attrs.class)"
    role="region"
    aria-roledescription="carousel"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>
