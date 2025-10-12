<template>
  <TabsContentPrimitive
    :class="[
      'mt-2 ring-offset-background focus-visible:outline-none',
      'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </TabsContentPrimitive>
</template>

<script>
import * as TabsPrimitive from '@radix-ui/vue-tabs';
const { Content: TabsContentPrimitive } = TabsPrimitive;

export default {
  name: 'TabsContent',
  inheritAttrs: false,
  components: {
    TabsContentPrimitive,
  },
};
</script>
