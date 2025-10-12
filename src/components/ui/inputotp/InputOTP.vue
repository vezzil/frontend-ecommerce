<template>
  <OTPInput
    ref="otpInputRef"
    v-bind="$attrs"
    :class="cn('disabled:cursor-not-allowed', $attrs.class)"
    :container-class-name="cn('flex items-center gap-2 has-[:disabled]:opacity-50', $attrs.containerClassName)"
  >
    <slot />
  </OTPInput>
</template>

<script setup>
import { OTPInput } from '@input-otp/vue';
import { cn } from '@/lib/utils';
import { ref } from 'vue';

defineOptions({
  name: 'BaseInputOTP',
  inheritAttrs: false,
});

const otpInputRef = ref(null);

defineExpose({
  otpInput: otpInputRef,
});
</script>
