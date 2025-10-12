<script setup lang="ts">
import { Sonner as SonnerPrimitive, type ToasterProps as SonnerProps } from 'sonner';
import { useTheme } from 'next-themes';

defineOptions({
  name: 'Toaster',
  inheritAttrs: false,
});

const props = defineProps<{
  /**
   * The position of the toaster
   * @default 'bottom-right'
   */
  position?: SonnerProps['position'];
  /**
   * The theme of the toaster
   * @default 'system'
   */
  theme?: SonnerProps['theme'];
  /**
   * Whether to show the close button
   * @default true
   */
  closeButton?: boolean;
  /**
   * The duration in milliseconds to show the toast
   * @default 5000
   */
  duration?: number;
  /**
   * Whether to show the toast when the page is focused
   * @default true
   */
  visibleToasts?: number;
  /**
   * The gap between toasts in pixels
   * @default 8
   */
  gap?: number;
  /**
   * The offset from the edges of the screen in pixels
   * @default 16
   */
  offset?: number | string;
  /**
   * Whether to expand the toasts by default
   * @default false
   */
  expand?: boolean;
  /**
   * Whether to pause the toast when the page is not focused
   * @default true
   */
  pauseWhenPageIsHidden?: boolean;
  /**
   * Whether to show the toast when the page is focused
   * @default true
   */
  visible?: boolean;
  /**
   * Whether to show the toast when the page is not focused
   * @default false
   */
  richColors?: boolean;
}>();

const { theme } = useTheme();

const toastOptions = {
  classNames: {
    toast:
      'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
    description: 'group-[.toast]:text-muted-foreground',
    actionButton: 'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
    cancelButton: 'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
  },
};
</script>

<template>
  <SonnerPrimitive
    :theme="(theme as SonnerProps['theme']) || 'system'"
    class="toaster group"
    :toast-options="toastOptions"
    :position="position"
    :duration="duration"
    :close-button="closeButton"
    :visible-toasts="visibleToasts"
    :gap="gap"
    :offset="offset"
    :expand="expand"
    :pause-when-page-is-hidden="pauseWhenPageIsHidden"
    :visible="visible"
    :rich-colors="richColors"
    v-bind="$attrs"
  />
</template>
