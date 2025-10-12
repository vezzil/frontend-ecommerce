<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useSidebar } from './useSidebar';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  asChild?: boolean;
  class?: string;
  variant?: 'ghost' | 'outline' | 'default' | 'link' | 'secondary' | 'destructive' | null | undefined;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined;
}>(), {
  asChild: false,
  variant: 'ghost',
  size: 'icon',
});

const { toggleSidebar, state } = useSidebar();

const Comp = props.asChild ? 'button' : Button;
</script>

<template>
  <Tooltip>
    <TooltipTrigger as-child>
      <Comp
        :class="[
          'h-9 w-9',
          'group-data-[collapsible=icon]:flex',
          'group-data-[collapsible=offcanvas]:hidden',
          'group-data-[state=expanded]:hidden',
          'group-data-[state=collapsed]:flex',
          'lg:hidden',
          props.class,
        ]"
        :variant="variant"
        :size="size"
        @click="toggleSidebar"
      >
        <slot>
          <PanelLeft class="h-4 w-4" />
        </slot>
        <span class="sr-only">Toggle Sidebar</span>
      </Comp>
    </TooltipTrigger>
    <TooltipContent side="right" class="flex items-center gap-2">
      <span>Toggle Sidebar</span>
      <kbd class="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        <span class="text-xs">⌘</span>B
      </kbd>
    </TooltipContent>
  </Tooltip>
</template>
