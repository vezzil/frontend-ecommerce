<script setup lang="ts">
import { computed, inject } from 'vue';
import { cn } from '@/lib/utils';
import type { ChartTooltipProps } from './types';

const props = withDefaults(defineProps<ChartTooltipProps>(), {
  active: false,
  payload: () => [],
  label: '',
  className: '',
  hideLabel: false,
  hideIndicator: false,
  indicator: 'line',
  nameKey: 'name',
  labelKey: 'name',
  valueKey: 'value',
});

const chartContext = inject<{ config: Record<string, any> }>('chart');

const getIndicatorClass = (indicatorType: string) => {
  switch (indicatorType) {
    case 'dot':
      return 'h-2 w-2 rounded-full';
    case 'dashed':
      return 'h-0.5 w-4 border-t-2 border-dashed';
    case 'line':
    default:
      return 'h-0.5 w-4';
  }
};

const getPayloadItems = computed(() => {
  if (!props.payload || !props.payload.length) return [];
  
  return props.payload.map((item: any) => {
    const name = item.name || '';
    const value = item.value;
    const color = item.color || '';
    
    return {
      name,
      value,
      color,
      payload: item.payload,
    };
  });
});

const formattedLabel = computed(() => {
  if (props.hideLabel || !props.label) return null;
  return props.labelFormatter ? props.labelFormatter(props.label) : props.label;
});
</script>

<template>
  <div
    v-if="props.active && getPayloadItems.length"
    :class="
      cn(
        'z-50 min-w-[180px] overflow-hidden rounded-md border bg-popover px-3 py-2 text-popover-foreground shadow-md',
        props.className
      )
    "
  >
    <div v-if="formattedLabel" class="mb-2 text-sm font-medium">
      {{ formattedLabel }}
    </div>
    <div class="space-y-1">
      <div
        v-for="(item, index) in getPayloadItems"
        :key="index"
        class="flex items-center justify-between gap-4"
      >
        <div class="flex items-center gap-2">
          <span
            v-if="!props.hideIndicator"
            :class="[
              getIndicatorClass(props.indicator),
              'shrink-0',
            ]"
            :style="{ backgroundColor: item.color }"
            aria-hidden="true"
          />
          <span class="text-sm">
            {{ item.name }}
          </span>
        </div>
        <span class="font-medium">
          {{ item.value }}
        </span>
      </div>
    </div>
  </div>
</template>
