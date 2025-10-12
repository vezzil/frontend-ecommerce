<script setup lang="ts">
import { NavigationMenuContent as NavigationMenuContentPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'NavigationMenuContent'
})

const props = defineProps({
  asChild: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  },
  forceMount: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NavigationMenuContentPrimitive
    :as-child="asChild"
    :force-mount="forceMount"
    :class="
      cn(
        'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
        props.class
      )
    "
  >
    <slot />
  </NavigationMenuContentPrimitive>
</template>
