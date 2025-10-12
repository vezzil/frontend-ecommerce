<script setup lang="ts">
import { cn } from '@/lib/utils';
import { ChevronRight } from 'lucide-vue-next';

defineOptions({
  name: 'BreadcrumbSeparator',
  inheritAttrs: false
});

const props = defineProps({
  class: {
    type: String,
    default: ''
  }
});
</script>

<template>
  <li 
    role="presentation" 
    aria-hidden="true" 
    :class="cn('[&>svg]:size-3.5', props.class)" 
    v-bind="$attrs"
  >
    <slot>
      <ChevronRight />
    </slot>
  </li>
</template>
