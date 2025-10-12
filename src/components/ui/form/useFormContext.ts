import { inject } from 'vue';

export function useFormContext() {
  const formContext = inject('formContext');
  
  if (!formContext) {
    throw new Error('useFormContext must be used within a Form component');
  }
  
  return formContext;
}
