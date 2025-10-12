<script setup lang="ts">
import { PopoverTrigger as PopoverTriggerPrimitive } from 'radix-vue'

defineOptions({
  name: 'PopoverTrigger'
})

const props = defineProps({
  asChild: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <PopoverTriggerPrimitive :as-child="asChild">
    <slot />
  </PopoverTriggerPrimitive>
</template>
