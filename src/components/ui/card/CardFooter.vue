<template>
  <div :class="cn('flex items-center p-6 pt-0', $attrs.class)">
    <slot />
  </div>
</template>

<script>
import { cn } from '@/lib/utils';

export default {
  name: 'CardFooter',
  inheritAttrs: false,
  setup() {
    return {
      cn,
    };
  },
};
</script>
