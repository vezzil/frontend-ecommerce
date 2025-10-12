<script setup lang="ts">
import { Tooltip as RechartsTooltip } from 'recharts';

defineOptions({
  name: 'ChartTooltip',
  inheritAttrs: false,
});

// This is a simple wrapper around Recharts Tooltip to maintain consistency
// with the component naming and to easily extend it in the future if needed.
</script>

<template>
  <RechartsTooltip v-bind="$attrs">
    <slot />
  </RechartsTooltip>
</template>
