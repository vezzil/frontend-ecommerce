<script setup lang="ts">
import { inject } from 'vue';

defineOptions({
  name: 'AlertDialogTrigger',
  inheritAttrs: false
});

const { open } = inject('alertDialog', {
  open: () => {}
});
</script>

<template>
  <div @click="open" v-bind="$attrs">
    <slot />
  </div>
</template>
