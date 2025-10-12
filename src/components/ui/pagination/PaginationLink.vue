<script setup lang="ts">
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button/button'

defineOptions({
  name: 'PaginationLink'
})

const props = withDefaults(defineProps<{
  isActive?: boolean
  size?: 'default' | 'sm' | 'lg' | 'icon' | null | undefined
  class?: string
  href?: string
}>(), {
  isActive: false,
  size: 'icon',
  href: '#'
})

const variant = computed(() => props.isActive ? 'outline' : 'ghost')
</script>

<template>
  <a
    :href="href"
    :aria-current="isActive ? 'page' : undefined"
    :class="cn(
      buttonVariants({ variant, size }),
      props.class
    )"
  >
    <slot />
  </a>
</template>
