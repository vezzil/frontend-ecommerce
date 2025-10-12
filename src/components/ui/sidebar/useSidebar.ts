import { inject, ref, type Ref } from 'vue';

export const SIDEBAR_COOKIE_NAME = 'sidebar:state';
export const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
export const SIDEBAR_KEYBOARD_SHORTCUT = 'b';

export type SidebarState = 'expanded' | 'collapsed';

export interface SidebarContext {
  state: Ref<SidebarState>;
  open: Ref<boolean>;
  setOpen: (open: boolean) => void;
  openMobile: Ref<boolean>;
  setOpenMobile: (open: boolean) => void;
  isMobile: Ref<boolean>;
  toggleSidebar: () => void;
}

export const sidebarInjectionKey = Symbol('sidebar') as InjectionKey<SidebarContext>;

export function useSidebar() {
  const context = inject(sidebarInjectionKey);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
}

export function useIsMobile() {
  const isMobile = ref(false);
  
  const checkIfMobile = () => {
    isMobile.value = window.innerWidth < 768; // Tailwind's md breakpoint
  };

  onMounted(() => {
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
  });

  onUnmounted(() => {
    window.removeEventListener('resize', checkIfMobile);
  });

  return isMobile;
}
