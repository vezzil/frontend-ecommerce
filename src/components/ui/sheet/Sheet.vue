<script setup lang="ts">
import { Dialog as SheetPrimitive } from 'radix-vue'

defineOptions({
  name: 'Sheet'
})

const props = defineProps<{
  modelValue: boolean
  defaultOpen?: boolean
  open?: boolean
  modal?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  'openChange': [value: boolean]
}>()

const open = computed({
  get() {
    return props.open ?? props.modelValue
  },
  set(value: boolean) {
    emit('update:modelValue', value)
    emit('openChange', value)
  }
})
</script>

<template>
  <SheetPrimitive v-model:open="open" v-bind="$attrs">
    <slot />
  </SheetPrimitive>
</template>
