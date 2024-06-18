<script setup>
import { computed } from "vue";
import { TabsTrigger, useForwardProps } from "radix-vue";
import { cn } from "@/lib/utils";
import { tabsTriggertVariants } from ".";

const props = defineProps({
  value: { type: [String, Number], required: true },
  disabled: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
  variant: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <TabsTrigger
    v-bind="forwardedProps"
     :class="cn(tabsTriggertVariants({ variant }), props.class)"
  >
    <slot />
  </TabsTrigger>
</template>
