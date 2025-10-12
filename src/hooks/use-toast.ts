import { ref } from 'vue';

type Toast = {
  id: string;
  title?: string;
  description?: string;
  action?: any;
  variant?: 'default' | 'destructive';
  duration?: number;
};

const state = ref<{
  toasts: Toast[];
}>({
  toasts: [],
});

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000;

const genId = () => {
  return Math.random().toString(36).substring(2, 9);
};

const toast = (toastData: Omit<Toast, 'id'>) => {
  const id = genId();
  const toast = { ...toastData, id };
  
  // Add toast to the beginning of the array
  state.value.toasts = [toast, ...state.value.toasts].slice(0, TOAST_LIMIT);

  // Auto-dismiss after duration or default 5 seconds
  const duration = toast.duration || 5000;
  if (duration !== Infinity) {
    setTimeout(() => {
      dismissToast(id);
    }, duration);
  }

  return {
    id,
    dismiss: () => dismissToast(id),
  };
};

const dismissToast = (id: string) => {
  // Remove the toast
  state.value.toasts = state.value.toasts.filter((t) => t.id !== id);
};

export const useToast = () => {
  return {
    toasts: state.value.toasts,
    toast,
    dismiss: dismissToast,
  };
};

export { toast };
