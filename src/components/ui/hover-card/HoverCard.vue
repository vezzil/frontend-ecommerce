<script setup lang="ts">
import { HoverCardRoot, HoverCardTrigger, HoverCardContent } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'HoverCard'
})

const props = defineProps({
  defaultOpen: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: undefined
  },
  openDelay: {
    type: Number,
    default: 300
  },
  closeDelay: {
    type: Number,
    default: 300
  }
})

const emit = defineEmits(['update:open'])

const open = computed({
  get() {
    return props.open
  },
  set(value: boolean) {
    emit('update:open', value)
  }
})
</script>

<template>
  <HoverCardRoot
    v-model:open="open"
    :default-open="defaultOpen"
    :open-delay="openDelay"
    :close-delay="closeDelay"
  >
    <slot />
  </HoverCardRoot>
</template>
