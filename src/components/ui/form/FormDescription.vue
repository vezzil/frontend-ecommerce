<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/lib/utils';
import { useFormField } from './useFormField';

defineOptions({
  name: 'FormDescription',
});

const { formDescriptionId } = useFormField();
</script>

<template>
  <p :id="formDescriptionId" class="text-sm text-muted-foreground">
    <slot />
  </p>
</template>
