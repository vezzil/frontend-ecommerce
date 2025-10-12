<template>
  <p :class="cn('text-sm text-muted-foreground', $attrs.class)">
    <slot />
  </p>
</template>

<script>
import { cn } from '@/lib/utils';

export default {
  name: 'CardDescription',
  inheritAttrs: false,
  setup() {
    return {
      cn,
    };
  },
};
</script>
