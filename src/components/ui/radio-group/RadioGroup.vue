<script setup lang="ts">
import { RadioGroup as RadioGroupPrimitive } from 'radix-vue'
import { cn } from '@/lib/utils'

defineOptions({
  name: 'RadioGroup'
})

const props = defineProps<{
  modelValue?: string
  defaultValue?: string
  disabled?: boolean
  required?: boolean
  name?: string
  class?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<template>
  <RadioGroupPrimitive
    v-bind="$attrs"
    v-model="modelValue"
    :default-value="defaultValue"
    :disabled="disabled"
    :required="required"
    :name="name"
    :class="cn('grid gap-2', props.class)"
    @update:modelValue="(value: string) => emit('update:modelValue', value)"
  >
    <slot />
  </RadioGroupPrimitive>
</template>
