import { inject, computed } from 'vue';
import { useFormContext } from './useFormContext';

export function useFormField() {
  const fieldContext = inject('fieldContext', {} as { name: string });
  const itemContext = inject('itemContext', {} as { id: string });
  const { getFieldState, formState } = useFormContext();

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>');
  }

  const fieldState = computed(() => 
    getFieldState(fieldContext.name, formState)
  );

  const id = itemContext.id;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState.value,
  };
}
