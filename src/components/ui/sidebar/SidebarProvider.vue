<script setup lang="ts">
import { ref, computed, provide, onMounted, onUnmounted } from 'vue';
import { useIsMobile, type SidebarState, sidebarInjectionKey } from './useSidebar';
import { cn } from '@/lib/utils';

const props = withDefaults(defineProps<{
  defaultOpen?: boolean;
  open?: boolean;
  class?: string;
  style?: Record<string, string>;
}>(), {
  defaultOpen: true,
});

const emit = defineEmits<{
  'update:open': [value: boolean];
}>();

const isMobile = useIsMobile();
const openMobile = ref(false);
const internalOpen = ref(props.defaultOpen);

const open = computed<boolean>({
  get() {
    return props.open ?? internalOpen.value;
  },
  set(value: boolean) {
    if (props.open === undefined) {
      internalOpen.value = value;
    }
    emit('update:open', value);
    
    // Set cookie to remember sidebar state
    document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
  },
});

const state = computed<SidebarState>(() => open.value ? 'expanded' : 'collapsed');

const toggleSidebar = () => {
  if (isMobile.value) {
    openMobile.value = !openMobile.value;
  } else {
    open.value = !open.value;
  }
};

// Keyboard shortcut
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
    event.preventDefault();
    toggleSidebar();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
  
  // Load sidebar state from cookie
  const cookie = document.cookie
    .split('; ')
    .find(row => row.startsWith(`${SIDEBAR_COOKIE_NAME}=`));
    
  if (cookie) {
    const value = cookie.split('=')[1];
    if (value === 'true' || value === 'false') {
      open.value = value === 'true';
    }
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
});

// Provide context to child components
provide(sidebarInjectionKey, {
  state,
  open,
  setOpen: (value: boolean) => { open.value = value; },
  openMobile,
  setOpenMobile: (value: boolean) => { openMobile.value = value; },
  isMobile,
  toggleSidebar,
});
</script>

<template>
  <TooltipProvider :delay-duration="0">
    <div
      :class="cn('group/sidebar-wrapper flex min-h-svh w-full has-[[data-variant=inset]]:bg-sidebar', props.class)"
      :style="{
        '--sidebar-width': '16rem',
        '--sidebar-width-icon': '3rem',
        ...style,
      }"
    >
      <slot />
    </div>
  </TooltipProvider>
</template>
