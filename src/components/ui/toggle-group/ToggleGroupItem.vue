<script setup lang="ts">
import { inject, computed } from 'vue';
import { cn } from '@/lib/utils';
import { toggleGroupInjectionKey, type ToggleGroupContext } from './ToggleGroup.vue';

const props = withDefaults(defineProps<{
  value: string;
  disabled?: boolean;
  variant?: 'default' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  class?: string;
  asChild?: boolean;
}>(), {
  disabled: false,
  asChild: false,
});

const context = inject<ToggleGroupContext>(toggleGroupInjectionKey);

const variant = computed(() => props.variant || context?.variant?.value || 'default');
const size = computed(() => props.size || context?.size?.value || 'default');

const classes = computed(() => {
  return cn(
    'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors',
    'hover:bg-muted hover:text-muted-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'data-[state=on]:bg-accent data-[state=on]:text-accent-foreground',
    {
      'bg-transparent': variant.value === 'default',
      'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground': variant.value === 'outline',
      'h-10 px-3': size.value === 'default',
      'h-9 px-2.5': size.value === 'sm',
      'h-11 px-5': size.value === 'lg',
    },
    props.class
  );
});

defineOptions({
  name: 'ToggleGroupItem',
  inheritAttrs: false,
});
</script>

<template>
  <button
    type="button"
    role="switch"
    :class="classes"
    :disabled="disabled"
    :data-state="$attrs['data-state']"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
