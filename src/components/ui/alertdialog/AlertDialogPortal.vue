<script setup lang="ts">
import { Teleport } from 'vue';

defineOptions({
  name: 'AlertDialogPortal',
  inheritAttrs: false
});

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: 'body'
  }
});
</script>

<template>
  <Teleport :to="to" :disabled="disabled">
    <slot />
  </Teleport>
</template>
