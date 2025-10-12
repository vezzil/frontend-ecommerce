<script setup lang="ts">
import { ScrollArea as ScrollAreaPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'ScrollArea'
})

const props = defineProps<{
  class?: string
  type?: 'auto' | 'always' | 'scroll' | 'hover'
  scrollHideDelay?: number
  dir?: 'ltr' | 'rtl'
}>()

const slots = defineSlots<{
  default: {}
}>()
</script>

<template>
  <ScrollAreaPrimitive
    :type="type"
    :scroll-hide-delay="scrollHideDelay"
    :dir="dir"
    :class="cn('relative overflow-hidden', props.class)"
  >
    <ScrollAreaPrimitive.Viewport class="h-full w-full rounded-[inherit]">
      <slot />
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive>
</template>
