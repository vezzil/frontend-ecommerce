<script setup lang="ts">
import { NavigationMenuTrigger as NavigationMenuTriggerPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'
import { ChevronDown } from 'lucide-vue-next'

defineOptions({
  name: 'NavigationMenuTrigger'
})

const props = defineProps({
  asChild: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <NavigationMenuTriggerPrimitive
    :as-child="asChild"
    :class="
      cn(
        'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
        props.class
      )
    "
  >
    <slot />
    <ChevronDown
      class="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
      aria-hidden="true"
    />
  </NavigationMenuTriggerPrimitive>
</template>
