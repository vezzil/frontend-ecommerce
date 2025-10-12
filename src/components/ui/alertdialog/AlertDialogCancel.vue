<script setup lang="ts">
import { cn } from '@/lib/utils'
import { buttonVariants } from '../button'

defineOptions({
  name: 'AlertDialogCancel',
  inheritAttrs: false,
})

const props = defineProps({
  class: {
    type: String,
    default: '',
  },
})

const { close } = inject('alertDialog', {
  close: () => {},
})
</script>

<template>
  <button
    :class="cn(buttonVariants({ variant: 'outline' }), 'mt-2 sm:mt-0', props.class)"
    @click="close"
    v-bind="$attrs"
  >
    <slot />
  </button>
</template>
