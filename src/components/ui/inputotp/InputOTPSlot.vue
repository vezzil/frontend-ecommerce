<template>
  <div
    :class="[
      'relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md',
      { 'z-10 ring-2 ring-ring ring-offset-background': isActive },
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    {{ char }}
    <div v-if="hasFakeCaret" class="pointer-events-none absolute inset-0 flex items-center justify-center">
      <div class="animate-caret-blink h-4 w-px bg-foreground duration-1000" />
    </div>
  </div>
</template>

<script setup>
import { cn } from '@/lib/utils';
import { useOTPInputContext } from '@input-otp/vue';
import { computed } from 'vue';

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

const context = useOTPInputContext();
const { char, hasFakeCaret, isActive } = computed(() => context.slots[props.index]).value;

defineOptions({
  name: 'InputOTPSlot',
  inheritAttrs: false,
});
</script>
