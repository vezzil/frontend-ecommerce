<template>
  <TabsListPrimitive
    :class="[
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      $attrs.class,
    ]"
    v-bind="$attrs"
  >
    <slot />
  </TabsListPrimitive>
</template>

<script>
import * as TabsPrimitive from '@radix-ui/vue-tabs';
const { List: TabsListPrimitive } = TabsPrimitive;

export default {
  name: 'TabsList',
  inheritAttrs: false,
  components: {
    TabsListPrimitive,
  },
};
</script>
