<script setup lang="ts">
import { Search } from 'lucide-vue-next';
import { cn } from '@/lib/utils';

defineOptions({
  inheritAttrs: false,
});

const props = defineProps<{
  class?: string;
  disabled?: boolean;
  placeholder?: string;
}>();

const inputRef = ref<HTMLInputElement>();

defineExpose({
  element: inputRef,
  focus: () => inputRef.value?.focus(),
});
</script>

<template>
  <div class="flex items-center border-b px-3" cmdk-input-wrapper="">
    <Search class="mr-2 h-4 w-4 shrink-0 opacity-50" />
    <input
      ref="inputRef"
      :class="
        cn(
          'flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
          props.class,
        )
      "
      :disabled="props.disabled"
      :placeholder="props.placeholder"
      v-bind="$attrs"
    />
  </div>
</template>
