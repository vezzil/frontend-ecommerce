<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import PaginationLink from './PaginationLink.vue'

defineOptions({
  name: 'PaginationPrevious'
})

const props = withDefaults(defineProps<{
  class?: string
  href?: string
}>(), {
  href: '#'
})
</script>

<template>
  <PaginationLink
    :class="cn('gap-1 pl-2.5', props.class)"
    :href="href"
  >
    <ChevronLeft class="h-4 w-4" />
    <span>Previous</span>
  </PaginationLink>
</template>
