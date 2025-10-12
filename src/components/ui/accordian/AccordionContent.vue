<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'AccordionContent',
  inheritAttrs: false
});

const props = defineProps({
  class: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    required: true
  }
});

const content = ref<HTMLDivElement | null>(null);
const height = ref(0);
const isMounted = ref(false);

const updateHeight = () => {
  if (content.value) {
    height.value = props.isActive ? content.value.scrollHeight : 0;
  }
};

onMounted(() => {
  isMounted.value = true;
  updateHeight();
  window.addEventListener('resize', updateHeight);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
});

const contentStyles = computed(() => ({
  height: isMounted.value ? `${height.value}px` : '0',
  overflow: 'hidden',
  transition: 'height 200ms cubic-bezier(0.4, 0, 0.2, 1)'
}));

watch(() => props.isActive, (newVal) => {
  if (newVal) {
    updateHeight();
  } else {
    // Add a small delay to allow the animation to complete
    setTimeout(updateHeight, 200);
  }
}, { immediate: true });
</script>

<template>
  <div
    :style="contentStyles"
    class="overflow-hidden transition-all duration-200 ease-in-out"
    v-bind="$attrs"
  >
    <div ref="content" :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </div>
</template>
