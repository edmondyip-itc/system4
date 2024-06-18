<script setup>
import { computed } from "vue";
import { TabsList } from "radix-vue";
import { cn } from "@/lib/utils";
import { tabsListVariants } from ".";

const props = defineProps({
  loop: { type: Boolean, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false },
  class: { type: null, required: false },
  variant: { type: null, required: false },
});

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props;

  return delegated;
});
</script>

<template>
  <TabsList
    v-bind="delegatedProps"
    :class="cn(tabsListVariants({ variant }), props.class)"
  >
    <slot />
  </TabsList>
</template>
