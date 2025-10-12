<script setup lang="ts">
import { provide, type HTMLAttributes, type InjectionKey, type Ref, ref } from 'vue';
import { cn } from '@/lib/utils';

export type ToggleGroupVariant = 'default' | 'outline';
export type ToggleGroupSize = 'default' | 'sm' | 'lg';

interface ToggleGroupContext {
  variant: Ref<ToggleGroupVariant | undefined>;
  size: Ref<ToggleGroupSize | undefined>;
}

const toggleGroupInjectionKey = Symbol() as InjectionKey<ToggleGroupContext>;

const props = withDefaults(defineProps<{
  variant?: ToggleGroupVariant;
  size?: ToggleGroupSize;
  class?: string;
}>(), {
  variant: 'default',
  size: 'default',
});

const variantRef = ref(props.variant);
const sizeRef = ref(props.size);

provide(toggleGroupInjectionKey, {
  variant: variantRef,
  size: sizeRef,
});

defineOptions({
  name: 'ToggleGroup',
  inheritAttrs: false,
});

defineSlots<{
  default: (props: {}) => any;
}>();
</script>

<template>
  <div :class="cn('flex items-center justify-center gap-1', props.class)" v-bind="$attrs">
    <slot />
  </div>
</template>

export { toggleGroupInjectionKey };
export type { ToggleGroupContext };
