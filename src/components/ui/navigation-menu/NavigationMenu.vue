<script setup lang="ts">
import { NavigationMenu as NavigationMenuPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'NavigationMenu'
})

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  class: {
    type: String,
    default: ''
  },
  delayDuration: {
    type: Number,
    default: 250
  },
  skipDelayDuration: {
    type: Number,
    default: 300
  },
  dir: {
    type: String,
    default: 'ltr',
    validator: (value: string) => ['ltr', 'rtl'].includes(value)
  },
  viewportClass: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

const value = computed({
  get() {
    return props.modelValue
  },
  set(value: string) {
    emit('update:modelValue', value)
  }
})
</script>

<template>
  <NavigationMenuPrimitive
    v-model="value"
    :delay-duration="delayDuration"
    :skip-delay-duration="skipDelayDuration"
    :dir="dir"
    :class="cn('relative z-10 flex max-w-max flex-1 items-center justify-center', props.class)"
  >
    <slot />
  </NavigationMenuPrimitive>
</template>
