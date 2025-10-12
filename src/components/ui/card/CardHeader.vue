<template>
  <div :class="cn('flex flex-col space-y-1.5 p-6', $attrs.class)">
    <slot />
  </div>
</template>

<script>
import { cn } from '@/lib/utils';

export default {
  name: 'CardHeader',
  inheritAttrs: false,
  setup() {
    return {
      cn,
    };
  },
};
</script>
