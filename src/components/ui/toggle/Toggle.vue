<script setup lang="ts">
import { cn } from '@/lib/utils';
import { toggleVariants } from './toggleVariants';

const props = withDefaults(defineProps<{
  /**
   * The variant of the toggle
   * @default 'default'
   */
  variant?: 'default' | 'outline';
  /**
   * The size of the toggle
   * @default 'default'
   */
  size?: 'default' | 'sm' | 'lg';
  /**
   * Whether the toggle is pressed
   */
  pressed?: boolean;
  /**
   * Whether the toggle is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Additional class names to apply to the toggle
   */
  class?: string;
  /**
   * The type of the button
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
}>(), {
  variant: 'default',
  size: 'default',
  disabled: false,
  type: 'button',
});

const emit = defineEmits<{
  /**
   * Emitted when the toggle is pressed
   */
  (e: 'update:pressed', pressed: boolean): void;
  /**
   * Emitted when the toggle is clicked
   */
  (e: 'click', event: MouseEvent): void;
}>();

const isPressed = computed({
  get() {
    return props.pressed ?? false;
  },
  set(value: boolean) {
    emit('update:pressed', value);
  },
});

const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    isPressed.value = !isPressed.value;
    emit('click', event);
  }
};
</script>

<template>
  <button
    :type="type"
    role="switch"
    :aria-pressed="isPressed"
    :disabled="disabled"
    :class="
      cn(
        toggleVariants({ variant, size }),
        {
          'opacity-50 cursor-not-allowed': disabled,
          'cursor-pointer': !disabled,
        },
        props.class
      )
    "
    :data-state="isPressed ? 'on' : 'off'"
    @click="handleClick"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
