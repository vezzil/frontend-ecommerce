<script setup lang="ts">
import { cn } from '@/lib/utils'
import { buttonVariants } from '../button'

defineOptions({
  name: 'AlertDialogAction',
  inheritAttrs: false,
})

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button :class="cn(buttonVariants(), props.class)" v-bind="$attrs">
    <slot />
  </button>
</template>
