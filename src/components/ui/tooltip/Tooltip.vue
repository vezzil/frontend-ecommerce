<template>
  <div class="relative inline-block">
    <div 
      v-if="isOpen"
      ref="tooltipRef"
      class="absolute z-50 rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md"
      :class="[
        'animate-in fade-in-0',
        {
          'top-full mt-2': placement === 'bottom',
          'bottom-full mb-2': placement === 'top',
          'left-full ml-2': placement === 'right',
          'right-full mr-2': placement === 'left',
        },
        $attrs.class
      ]"
      :style="{
        transform: getTransform(),
      }"
    >
      <slot name="content" />
    </div>
    <div 
      @mouseenter="openTooltip"
      @mouseleave="closeTooltip"
      @focus="openTooltip"
      @blur="closeTooltip"
      class="inline-block"
      :aria-describedby="isOpen ? 'tooltip' : undefined"
    >
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

defineOptions({
  name: 'BaseTooltip',
  inheritAttrs: false,
});

const props = defineProps({
  placement: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value),
  },
  openDelay: {
    type: Number,
    default: 0,
  },
  closeDelay: {
    type: Number,
    default: 0,
  },
});

const isOpen = ref(false);
const tooltipRef = ref(null);
let openTimeout = null;
let closeTimeout = null;

const openTooltip = () => {
  if (closeTimeout) {
    clearTimeout(closeTimeout);
    closeTimeout = null;
  }
  
  if (!isOpen.value) {
    openTimeout = setTimeout(() => {
      isOpen.value = true;
    }, props.openDelay);
  }
};

const closeTooltip = () => {
  if (openTimeout) {
    clearTimeout(openTimeout);
    openTimeout = null;
  }
  
  closeTimeout = setTimeout(() => {
    isOpen.value = false;
  }, props.closeDelay);
};

const getTransform = () => {
  if (!tooltipRef.value) return '';
  
  switch (props.placement) {
    case 'top':
      return 'translateX(-50%)';
    case 'bottom':
      return 'translateX(-50%)';
    case 'left':
      return 'translateY(-50%)';
    case 'right':
      return 'translateY(-50%)';
    default:
      return '';
  }
};

const handleClickOutside = (event) => {
  if (tooltipRef.value && !tooltipRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
  if (openTimeout) clearTimeout(openTimeout);
  if (closeTimeout) clearTimeout(closeTimeout);
});
</script>
