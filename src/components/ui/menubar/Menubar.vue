<script setup lang="ts">
import { MenubarRoot } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'Menubar'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  class: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const open = computed({
  get() {
    return props.modelValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <MenubarRoot
    v-model:open="open"
    :class="cn('flex h-10 items-center space-x-1 rounded-md border bg-background p-1', props.class)"
  >
    <slot />
  </MenubarRoot>
</template>
