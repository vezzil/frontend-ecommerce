<script setup lang="ts">
import { MenubarTrigger as MenubarTriggerPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'MenubarTrigger'
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
  <MenubarTriggerPrimitive
    :as-child="asChild"
    :class="
      cn(
        'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none',
        'data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
        'focus:bg-accent focus:text-accent-foreground',
        props.class
      )
    "
  >
    <slot />
  </MenubarTriggerPrimitive>
</template>
