<script setup lang="ts">
import { computed } from 'vue';
import { useSidebar } from './useSidebar';
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  asChild?: boolean;
  isActive?: boolean;
  variant?: 'default' | 'ghost' | 'outline' | 'secondary' | 'destructive' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  class?: string;
  tooltip?: string;
}>(), {
  asChild: false,
  isActive: false,
  variant: 'default',
  size: 'default',
});

const { state } = useSidebar();

const Comp = props.asChild ? 'button' : 'button';

const classes = computed(() => {
  return cn(
    'group relative flex w-full items-center justify-start gap-2 rounded-md px-3 py-1.5 text-sm font-medium transition-colors',
    'hover:bg-accent hover:text-accent-foreground',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    {
      'bg-accent text-accent-foreground': props.isActive,
      'h-9': props.size === 'default',
      'h-8 rounded-md px-2': props.size === 'sm',
      'h-10 rounded-md px-4': props.size === 'lg',
      'h-9 w-9 p-0': props.size === 'icon',
    },
    props.class,
  );
});
</script>

<template>
  <Tooltip v-if="tooltip" :delay-duration="0">
    <TooltipTrigger as-child>
      <Comp :class="classes" v-bind="$attrs">
        <slot />
      </Comp>
    </TooltipTrigger>
    <TooltipContent
      side="right"
      class="flex items-center gap-2"
      :class="{
        'group-data-[state=expanded]/sidebar-wrapper:hidden': state === 'expanded',
      }"
    >
      <span>{{ tooltip }}</span>
      <kbd
        v-if="$slots.shortcut"
        class="pointer-events-none ml-auto flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100"
      >
        <slot name="shortcut" />
      </kbd>
    </TooltipContent>
  </Tooltip>
  <Comp v-else :class="classes" v-bind="$attrs">
    <slot />
  </Comp>
</template>
