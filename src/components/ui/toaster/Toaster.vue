<script setup lang="ts">
import { useToast } from "@/hooks/use-toast";
import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "@/components/ui/toast";

const { toasts } = useToast();
</script>

<template>
  <ToastProvider>
    <component
      v-for="{ id, title, description, action, ...props } in toasts"
      :key="id"
      :is="Toast"
      v-bind="props"
    >
      <div class="grid gap-1">
        <component :is="ToastTitle" v-if="title">
          {{ title }}
        </component>
        <component :is="ToastDescription" v-if="description">
          {{ description }}
        </component>
      </div>
      <component :is="action" v-if="action" />
      <ToastClose />
      <ToastViewport />
    </component>
  </ToastProvider>
</template>
