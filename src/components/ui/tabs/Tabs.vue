<template>
  <TabsRoot v-bind="$attrs" :default-value="defaultValue">
    <slot />
  </TabsRoot>
</template>

<script>
import * as TabsPrimitive from '@radix-ui/vue-tabs';
const { Root: TabsRoot } = TabsPrimitive;

export default {
  name: 'BaseTabs',
  inheritAttrs: false,
  components: {
    TabsRoot,
  },
  props: {
    defaultValue: {
      type: String,
      default: '',
    },
  },
};
</script>
