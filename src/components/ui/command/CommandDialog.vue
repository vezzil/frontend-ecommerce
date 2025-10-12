<script setup lang="ts">
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Command } from '.';
import { cn } from '@/lib/utils';

const props = defineProps<{
  modelValue: boolean;
  class?: string;
}>();

const emit = defineEmits<{
  'update:modelValue': [value: boolean];
}>();

const open = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value),
});
</script>

<template>
  <Dialog v-model:open="open">
    <DialogContent class="overflow-hidden p-0 shadow-lg">
      <Command
        :class="
          cn(
            '[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5',
            props.class,
          )
        "
      >
        <slot />
      </Command>
    </DialogContent>
  </Dialog>
</template>
