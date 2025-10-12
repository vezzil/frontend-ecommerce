<script setup lang="ts">
import { AspectRatio as AspectRatioPrimitive } from 'radix-vue';

defineOptions({
  name: 'AspectRatio',
  inheritAttrs: false
});

const props = defineProps({
  ratio: {
    type: Number,
    default: 16 / 9
  },
  asChild: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <AspectRatioPrimitive.Root 
    :ratio="ratio"
    :as-child="asChild"
    :class="cn('relative w-full overflow-hidden', props.class)"
    v-bind="$attrs"
  >
    <slot />
  </AspectRatioPrimitive.Root>
</template>
