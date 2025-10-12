<script setup lang="ts">
import { Popover as PopoverPrimitive } from 'radix-vue'

defineOptions({
  name: 'Popover'
})

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  defaultOpen: {
    type: Boolean,
    default: false
  },
  open: {
    type: Boolean,
    default: undefined
  }
})

const emit = defineEmits(['update:modelValue'])

const openState = computed({
  get() {
    return props.open ?? props.modelValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <PopoverPrimitive v-model:open="openState" v-bind="$attrs">
    <slot />
  </PopoverPrimitive>
</template>
