<script setup lang="ts">
import { Dialog as DrawerPrimitive } from 'radix-vue';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  asChild?: boolean;
  as?: string | object;
}>();
</script>

<template>
  <DrawerPrimitive.Close v-bind="$attrs" :as-child="asChild" :as="as">
    <slot>
      <span class="sr-only">Close</span>
    </slot>
  </DrawerPrimitive.Close>
</template>
