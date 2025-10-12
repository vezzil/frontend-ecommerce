<script setup lang="ts">
import { provide, type VNode } from 'vue';
import { useForm, type UseFormReturn } from 'vee-validate';

defineOptions({
  name: 'Form',
});

const props = defineProps<{
  form: UseFormReturn<any>;
  onSubmit: (values: any) => void;
}>();

provide('formContext', {
  ...props.form,
  handleSubmit: props.onSubmit ? props.form.handleSubmit(props.onSubmit) : undefined,
});

defineSlots<{
  default: (props: {}) => VNode[];
}>();
</script>

<template>
  <form @submit="form.handleSubmit">
    <slot />
  </form>
</template>
