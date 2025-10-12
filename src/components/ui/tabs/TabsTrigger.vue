<template>
  <TabsTriggerPrimitive
    :class="[
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium',
      'ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2',
      'focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      'data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </TabsTriggerPrimitive>
</template>

<script>
import * as TabsPrimitive from '@radix-ui/vue-tabs';
const { Trigger: TabsTriggerPrimitive } = TabsPrimitive;

export default {
  name: 'TabsTrigger',
  inheritAttrs: false,
  components: {
    TabsTriggerPrimitive,
  },
};
</script>
