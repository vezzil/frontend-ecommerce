<template>
  <div :class="cn('flex items-center', $attrs.class)" v-bind="$attrs">
    <slot />
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils';

defineOptions({
  name: 'InputOTPGroup',
  inheritAttrs: false,
});
</script>
