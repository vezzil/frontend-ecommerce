<script setup lang="ts">
import { inject, computed } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'CollapsibleTrigger',
  inheritAttrs: false,
});

const props = defineProps<{
  asChild?: boolean;
  class?: string;
  disabled?: boolean;
}>();

const context = inject('collapsible');

if (!context) {
  throw new Error('CollapsibleTrigger must be used within a Collapsible component');
}

const { open, disabled: contextDisabled, toggle } = context;

const isDisabled = computed(() => props.disabled || contextDisabled);

const handleClick = (event: Event) => {
  if (isDisabled.value) {
    event.preventDefault();
    return;
  }
  toggle();
};

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    toggle();
  }
};
</script>

<template>
  <component
    :is="asChild ? 'button' : 'button'"
    :class="
      cn(
        'flex w-full items-center justify-between py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
        'disabled:pointer-events-none disabled:opacity-50',
        props.class
      )
    "
    :disabled="isDisabled"
    :aria-expanded="open"
    :aria-controls="$attrs.id"
    @click="handleClick"
    @keydown="handleKeydown"
    v-bind="$attrs"
  >
    <slot :open="open" />
  </component>
</template>
