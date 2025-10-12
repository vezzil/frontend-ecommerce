<script setup lang="ts">
import { inject, computed } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'CollapsibleContent',
  inheritAttrs: false,
});

const props = defineProps<{
  asChild?: boolean;
  class?: string;
}>();

const context = inject('collapsible');

if (!context) {
  throw new Error('CollapsibleContent must be used within a Collapsible component');
}

const { open } = context;

const height = ref<number | null>(null);
const contentRef = ref<HTMLElement | null>(null);

// Calculate the height of the content for smooth animations
const updateHeight = () => {
  if (contentRef.value) {
    height.value = open.value ? contentRef.value.scrollHeight : 0;
  }
};

// Update height when content changes
watch(open, () => {
  updateHeight();
});

// Set up ResizeObserver to handle dynamic content changes
onMounted(() => {
  updateHeight();
  
  const observer = new ResizeObserver(() => {
    if (open.value) {
      updateHeight();
    }
  });
  
  if (contentRef.value) {
    observer.observe(contentRef.value);
  }
  
  onUnmounted(() => {
    observer.disconnect();
  });
});
</script>

<template>
  <div
    :style="{
      '--collapsible-content-height': height ? `${height}px` : '0px',
    }"
    :class="
      cn(
        'overflow-hidden transition-all duration-300 ease-in-out',
        !open && 'motion-reduce:transition-none',
        props.class
      )
    "
    :aria-hidden="!open"
    :aria-expanded="open"
    :data-state="open ? 'open' : 'closed'"
    :data-disabled="context?.disabled ? '' : undefined"
    v-bind="$attrs"
  >
    <div ref="contentRef">
      <slot :open="open" />
    </div>
  </div>
</template>
