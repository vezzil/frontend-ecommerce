<script setup lang="ts">
import { PanelGroup } from 'vue-resizable'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'ResizablePanelGroup'
})

const props = defineProps<{
  direction?: 'horizontal' | 'vertical'
  class?: string
}>()

const direction = computed(() => props.direction || 'horizontal')
</script>

<template>
  <PanelGroup
    :direction="direction"
    :class="
      cn(
        'flex h-full w-full',
        { 'flex-col': direction === 'vertical' },
        props.class
      )
    "
  >
    <slot />
  </PanelGroup>
</template>
