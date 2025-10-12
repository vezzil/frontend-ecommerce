<script setup lang="ts">
import { computed } from 'vue';
import { useFormField } from './useFormField';

defineOptions({
  name: 'FormControl',
});

const { error, formItemId, formDescriptionId, formMessageId } = useFormField();

const ariaDescribedby = computed(() => 
  !error.value ? formDescriptionId : `${formDescriptionId} ${formMessageId}`
);
</script>

<template>
  <div
    :id="formItemId"
    :aria-describedby="ariaDescribedby"
    :aria-invalid="!!error"
  >
    <slot />
  </div>
</template>
