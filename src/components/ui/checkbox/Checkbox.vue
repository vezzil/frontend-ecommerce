<script setup lang="ts">
import { Check } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'Checkbox',
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{
  modelValue?: boolean;
  disabled?: boolean;
  class?: string;
  id?: string;
  name?: string;
  required?: boolean;
  value?: string;
  onCheckedChange?: (checked: boolean) => void;
}>(), {
  modelValue: false,
  disabled: false,
  required: false,
});

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
  'checkedChange': [checked: boolean];
}>();

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const isChecked = target.checked;
  
  emit('update:modelValue', isChecked);
  emit('checkedChange', isChecked);
  props.onCheckedChange?.(isChecked);
};
</script>

<template>
  <div class="flex items-center space-x-2">
    <div class="relative">
      <input
        :id="id"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        :required="required"
        :name="name"
        :value="value"
        :class="[
          'peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
          'disabled:cursor-not-allowed disabled:opacity-50',
          'data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
          props.class,
        ]"
        v-bind="$attrs"
        @change="handleChange"
        class="sr-only"
      />
      <div 
        class="flex h-4 w-4 items-center justify-center rounded-sm border border-primary"
        :class="{
          'bg-primary text-primary-foreground': modelValue,
          'peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2': true,
          'peer-disabled:cursor-not-allowed peer-disabled:opacity-50': disabled,
        }"
      >
        <Check v-if="modelValue" class="h-3 w-3" />
      </div>
    </div>
    <label 
      v-if="$slots.default" 
      :for="id" 
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      <slot />
    </label>
  </div>
</template>
