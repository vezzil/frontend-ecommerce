<template>
  <div
    ref="alertRef"
    role="alert"
    :class="cn(alertVariants({ variant }), $attrs.class as string)"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { cn } from '@/lib/utils';
import { computed, type HTMLAttributes } from 'vue';

const props = withDefaults(defineProps<{
  variant?: 'default' | 'destructive';
  class?: HTMLAttributes['class'];
}>(), {
  variant: 'default',
});

defineOptions({
  inheritAttrs: false,
});

const alertVariants = {
  'default': 'bg-background text-foreground',
  'destructive': 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
};

const baseClasses = 'relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground';
</script>
