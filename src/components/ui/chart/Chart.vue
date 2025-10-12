<script setup lang="ts">
import { computed, provide, ref } from 'vue';
import { ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';
import type { ChartContextProps, ChartProps } from './types';

const props = withDefaults(defineProps<ChartProps>(), {
  id: '',
  class: '',
});

const uid = `chart-${props.id || Math.random().toString(36).substring(2, 9)}`;

// Provide context to child components
const context: ChartContextProps = {
  config: props.config,
  chartId: uid,
};

provide('chart', context);

// Generate CSS variables for theming
const colorConfig = computed(() => 
  Object.entries(props.config).filter(([_, config]) => config.theme || config.color)
);
</script>

<template>
  <div
    :data-chart="uid"
    :class="
      cn(
        'flex aspect-video justify-center text-xs',
        '[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground',
        '[&_.recharts-cartesian-grid_line[stroke="#ccc"]]:stroke-border/50',
        '[&_.recharts-curve.recharts-tooltip-cursor]:stroke-border',
        '[&_.recharts-dot[stroke="#fff"]]:stroke-transparent',
        '[&_.recharts-layer]:outline-none',
        '[&_.recharts-polar-grid_[stroke="#ccc"]]:stroke-border',
        '[&_.recharts-radial-bar-background-sector]:fill-muted',
        '[&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted',
        '[&_.recharts-reference-line_[stroke="#ccc"]]:stroke-border',
        '[&_.recharts-sector[stroke="#fff"]]:stroke-transparent',
        '[&_.recharts-sector]:outline-none',
        '[&_.recharts-surface]:outline-none',
        props.class
      )
    "
    v-bind="$attrs"
  >
    <!-- Generate CSS variables for theming -->
    <style v-if="colorConfig.length > 0">
      [data-chart="{{ uid }}"] {
        <template v-for="[key, itemConfig] in colorConfig" :key="key">
          <template v-if="itemConfig.color">
            --color-{{ key }}: {{ itemConfig.color }};
          </template>
          <template v-else-if="itemConfig.theme">
            --color-{{ key }}: {{ itemConfig.theme.light }};
          </template>
        </template>
      }

      .dark [data-chart="{{ uid }}"] {
        <template v-for="[key, itemConfig] in colorConfig" :key="`dark-${key}`">
          <template v-if="itemConfig.theme?.dark">
            --color-{{ key }}: {{ itemConfig.theme.dark }};
          </template>
        </template>
      }
    </style>

    <ResponsiveContainer>
      <slot />
    </ResponsiveContainer>
  </div>
</template>
