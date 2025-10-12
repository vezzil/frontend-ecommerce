<script setup lang="ts">
import { HoverCardTrigger as HoverCardTriggerPrimitive } from 'radix-vue'

defineOptions({
  name: 'HoverCardTrigger'
})
</script>

<template>
  <HoverCardTriggerPrimitive as-child>
    <slot />
  </HoverCardTriggerPrimitive>
</template>
