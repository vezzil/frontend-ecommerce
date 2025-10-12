<template>
  <label 
    :for="htmlFor"
    :class="[
      'text-sm font-medium leading-none',
      'peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormLabel',
  inheritAttrs: false,
  props: {
    htmlFor: {
      type: String,
      default: '',
    },
  },
});
</script>
