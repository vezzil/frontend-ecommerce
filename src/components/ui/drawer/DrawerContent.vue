<script setup lang="ts">
import { cn } from '@/lib/utils';
import DrawerOverlay from './DrawerOverlay.vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
  asChild?: boolean;
}>();

const emits = defineEmits<{
  (e: 'openAutoFocus', event: Event): void;
  (e: 'closeAutoFocus', event: Event): void;
  (e: 'escapeKeyDown', event: KeyboardEvent): void;
  (e: 'pointerDownOutside', event: PointerEvent): void;
  (e: 'interactOutside', event: Event): void;
}>();
</script>

<template>
  <DrawerPortal>
    <DrawerOverlay />
    <div
      :class="
        cn(
          'fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-background',
          props.class,
        )
      "
      v-bind="$attrs"
      @openAutoFocus="(e) => $emit('openAutoFocus', e)"
      @closeAutoFocus="(e) => $emit('closeAutoFocus', e)"
      @escapeKeyDown="(e) => $emit('escapeKeyDown', e)"
      @pointerDownOutside="(e) => $emit('pointerDownOutside', e)"
      @interactOutside="(e) => $emit('interactOutside', e)"
    >
      <div class="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
      <slot />
    </div>
  </DrawerPortal>
</template>
