<template>
  <div :class="cn('rounded-lg border bg-card text-card-foreground shadow-sm', $attrs.class)">
    <slot />
  </div>
</template>

<script>
import { cn } from '@/lib/utils';

export default {
  name: 'BaseCard',
  inheritAttrs: false,
  setup() {
    return {
      cn,
    };
  },
};
</script>
