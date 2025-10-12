<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { ChartLegendProps } from './types';

defineOptions({
  name: 'ChartLegend',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<ChartLegendProps>(), {
  payload: () => [],
  verticalAlign: 'bottom',
  align: 'center',
  layout: 'horizontal',
  className: '',
  hideIcon: false,
  activeKeys: () => [],
});

const emit = defineEmits<{
  (e: 'toggle', key: string): void;
}>();

const handleToggle = (key: string) => {
  emit('toggle', key);
  props.onToggle?.(key);
};

const alignmentClasses = computed(() => ({
  'justify-start': props.align === 'left',
  'justify-center': props.align === 'center',
  'justify-end': props.align === 'right',
}));

const layoutClasses = computed(() => ({
  'flex-row': props.layout === 'horizontal',
  'flex-col items-start': props.layout === 'vertical',
}));
</script>

<template>
  <div
    :class="
      cn(
        'flex items-center gap-4',
        layout === 'horizontal' ? 'flex-row' : 'flex-col items-start',
        alignmentClasses,
        props.className
      )
    "
    v-bind="$attrs"
  >
    <div
      v-for="entry in props.payload"
      :key="entry.value"
      class="flex cursor-pointer items-center gap-2"
      @click="handleToggle(entry.value)"
    >
      <span
        v-if="!props.hideIcon"
        class="h-3 w-3 rounded-sm"
        :class="{
          'opacity-50': activeKeys?.length && !activeKeys.includes(entry.value),
        }"
        :style="{
          backgroundColor: entry.color,
        }"
        aria-hidden="true"
      />
      <span
        class="text-sm"
        :class="{
          'opacity-50': activeKeys?.length && !activeKeys.includes(entry.value),
        }"
      >
        {{ entry.value }}
      </span>
    </div>
  </div>
</template>
