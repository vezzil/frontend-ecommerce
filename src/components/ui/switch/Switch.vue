<script setup lang="ts">
import { Switch as SwitchPrimitive } from '@radix-ui/vue-switch';
import { cn } from '@/lib/utils';

defineOptions({
  name: 'Switch',
  inheritAttrs: false,
});

const props = defineProps<{
  /**
   * The controlled state of the switch
   */
  modelValue?: boolean;
  /**
   * Whether the switch is checked by default
   */
  defaultChecked?: boolean;
  /**
   * Whether the switch is disabled
   */
  disabled?: boolean;
  /**
   * Whether the switch is required
   */
  required?: boolean;
  /**
   * The name of the switch (for forms)
   */
  name?: string;
  /**
   * The value of the switch (for forms)
   */
  value?: string;
  /**
   * Additional class names to apply to the switch
   */
  class?: string;
}>();

const emit = defineEmits<{
  /**
   * Event emitted when the switch's checked state changes
   */
  (e: 'update:modelValue', value: boolean): void;
  /**
   * Event emitted when the switch's checked state changes
   */
  (e: 'checkedChange', checked: boolean): void;
}>();

const checked = computed({
  get() {
    return props.modelValue ?? false;
  },
  set(value: boolean) {
    emit('update:modelValue', value);
    emit('checkedChange', value);
  },
});
</script>

<template>
  <SwitchPrimitive
    v-model:checked="checked"
    :default-checked="defaultChecked"
    :disabled="disabled"
    :required="required"
    :name="name"
    :value="value"
    :class="
      cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors',
        'data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        'disabled:cursor-not-allowed disabled:opacity-50',
        props.class
      )
    "
    v-bind="$attrs"
  >
    <SwitchPrimitive.Thumb
      :class="
        cn(
          'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
          'data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
        )
      "
    />
  </SwitchPrimitive>
</template>
