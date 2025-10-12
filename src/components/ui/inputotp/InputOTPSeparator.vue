<template>
  <div role="separator" v-bind="$attrs">
    <Dot />
  </div>
</template>

<script setup>
import { Dot } from 'lucide-vue-next';

defineOptions({
  name: 'InputOTPSeparator',
  inheritAttrs: false,
});
</script>
