<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';

defineOptions({
  name: 'FormLabel',
});

const { error, formItemId } = useFormField();

const classes = computed(() =>
  cn(
    'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
    error ? 'text-destructive' : ''
  )
);
</script>

<template>
  <label :for="formItemId" :class="classes">
    <slot />
  </label>
</template>
