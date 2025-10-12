<script setup lang="ts">
import { MenubarItem as MenubarItemPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'MenubarItem'
})

const props = defineProps({
  asChild: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  textValue: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <MenubarItemPrimitive
    :as-child="asChild"
    :disabled="disabled"
    :text-value="textValue"
    :class="
      cn(
        'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none',
        'focus:bg-accent focus:text-accent-foreground',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        props.class
      )
    "
  >
    <slot />
  </MenubarItemPrimitive>
</template>
