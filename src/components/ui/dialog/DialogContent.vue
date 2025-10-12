<script setup lang="ts">
import { X } from 'lucide-vue-next';
import { cn } from '@/lib/utils';
import DialogOverlay from './DialogOverlay.vue';
import DialogClose from './DialogClose.vue';

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
  <DialogPortal>
    <DialogOverlay />
    <div
      :class="
        cn(
          'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
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
      <slot />
      <DialogClose
        class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
      >
        <X class="h-4 w-4" />
      </DialogClose>
    </div>
  </DialogPortal>
</template>
