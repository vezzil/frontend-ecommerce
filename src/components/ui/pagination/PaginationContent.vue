<script setup lang="ts">
import { cn } from '@/lib/utils'

defineOptions({
  name: 'PaginationContent'
})

const props = defineProps<{
  class?: string
}>()

defineSlots<{
  default: {}
}>()
</script>

<template>
  <ul :class="cn('flex flex-row items-center gap-1', props.class)">
    <slot />
  </ul>
</template>
