<script setup lang="ts">
import { provide, computed } from 'vue';
import { useField } from 'vee-validate';

defineOptions({
  name: 'FormField',
});

const props = defineProps<{
  name: string;
  rules?: string | Record<string, any>;
  defaultValue?: any;
  modelValue?: any;
}>();

const { value, errorMessage } = useField(props.name, props.rules, {
  initialValue: props.defaultValue ?? props.modelValue,
});

const fieldContext = computed(() => ({
  name: props.name,
}));

provide('fieldContext', fieldContext.value);

defineSlots<{
  default: (props: { field: { value: any; name: string }; errorMessage: string | undefined }) => VNode[];
}>();
</script>

<template>
  <slot :field="{ value, name }" :error-message="errorMessage" />
</template>
