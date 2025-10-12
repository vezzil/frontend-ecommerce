<script setup lang="ts">
import { NavigationMenuList as NavigationMenuListPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'NavigationMenuList'
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
  <NavigationMenuListPrimitive
    :as-child="asChild"
    :class="
      cn(
        'group flex flex-1 list-none items-center justify-center space-x-1',
        props.class
      )
    "
  >
    <slot />
  </NavigationMenuListPrimitive>
</template>
