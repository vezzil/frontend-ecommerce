<script setup lang="ts">
import { MenubarSub as MenubarSubPrimitive } from 'radix-vue'

defineOptions({
  name: 'MenubarSub'
})

const props = defineProps({
  open: {
    type: Boolean,
    default: undefined
  },
  defaultOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:open'])

const openState = computed({
  get() {
    return props.open
  },
  set(value: boolean) {
    emit('update:open', value)
  }
})
</script>

<template>
  <MenubarSubPrimitive v-model:open="openState" v-bind="$attrs">
    <slot />
  </MenubarSubPrimitive>
</template>
