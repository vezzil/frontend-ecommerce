<script setup lang="ts">
import { NavigationMenuItem as NavigationMenuItemPrimitive } from 'radix-vue'

defineOptions({
  name: 'NavigationMenuItem'
})

const props = defineProps({
  value: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <NavigationMenuItemPrimitive :value="props.value">
    <slot />
  </NavigationMenuItemPrimitive>
</template>
