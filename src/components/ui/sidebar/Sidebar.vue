<script setup lang="ts">
import { computed } from 'vue';
import { useSidebar } from './useSidebar';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  side?: 'left' | 'right';
  variant?: 'sidebar' | 'floating' | 'inset';
  collapsible?: 'offcanvas' | 'icon' | 'none';
  class?: string;
}>(), {
  side: 'left',
  variant: 'sidebar',
  collapsible: 'offcanvas',
});

const { isMobile, state, openMobile, setOpenMobile } = useSidebar();

// Handle mobile view
if (isMobile.value && props.collapsible !== 'none') {
  // Mobile view with Sheet component
  const emit = defineEmits(['update:openMobile']);
  
  const updateOpenMobile = (value: boolean) => {
    setOpenMobile(value);
    emit('update:openMobile', value);
  };
  
  // Render mobile sheet
  // Note: You'll need to have the Sheet component available in your project
  // and import it at the top of this file
  // import { Sheet, SheetContent } from '@/components/ui/sheet';
  
  // The actual rendering is handled in the template
}

// For non-mobile or non-collapsible sidebar
const sidebarClasses = computed(() => {
  return cn(
    'hidden h-svh w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground',
    'group-data-[collapsible=offcanvas]:w-0',
    'group-data-[side=right]:rotate-180',
    props.variant === 'floating' || props.variant === 'inset'
      ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
      : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
    props.class
  );
});
</script>

<template>
  <template v-if="isMobile && collapsible !== 'none'">
    <!-- Mobile view with Sheet component -->
    <Sheet :open="openMobile" @update:open="setOpenMobile">
      <SheetContent
        data-sidebar="sidebar"
        data-mobile="true"
        :side="side"
        :class="[
          'w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground',
          '[&>button]:hidden',
        ]"
        :style="{ '--sidebar-width': '18rem' }"
      >
        <div class="flex h-full w-full flex-col">
          <slot />
        </div>
      </SheetContent>
    </Sheet>
  </template>
  
  <template v-else-if="collapsible === 'none'">
    <!-- Non-collapsible sidebar -->
    <div :class="cn('flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground', props.class)">
      <slot />
    </div>
  </template>
  
  <template v-else>
    <!-- Desktop view with collapsible sidebar -->
    <div
      class="group peer hidden text-sidebar-foreground md:block"
      :data-state="state"
      :data-collapsible="state === 'collapsed' ? collapsible : ''"
      :data-variant="variant"
      :data-side="side"
    >
      <!-- This handles the sidebar gap on desktop -->
      <div
        :class="[
          'relative h-svh w-[--sidebar-width] bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]'
            : 'group-data-[collapsible=icon]:w-[--sidebar-width-icon]',
        ]"
      />
      <div
        :class="[
          'fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] duration-200 ease-linear md:flex',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:-left-[--sidebar-width]'
            : 'right-0 group-data-[collapsible=offcanvas]:-right-[--sidebar-width]',
          variant === 'floating' ? 'top-2 mx-2 h-[calc(100vh-theme(spacing.4))] rounded-xl' : '',
          variant === 'inset' ? 'border-r border-border' : '',
        ]"
      >
        <div :class="sidebarClasses">
          <slot />
        </div>
      </div>
    </div>
  </template>
</template>
