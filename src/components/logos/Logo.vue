<script setup>
import { computed, defineProps } from 'vue'
import hex2rgba from '@/lib/color'
import { useDark } from '@vueuse/core';

const props = defineProps(['app'])
const isDark = useDark()
const bgColor = hex2rgba(props.app.colorCode, 0.4)
</script>

<template>
  <div v-if="isDark" class="p-3 rounded-xl bg-white/40">
    <component :is="props.app.logo" class="w-[24px]" :style="{'--logo-color': props.app.colorCode}" />
  </div>
  <div v-else class="p-3 rounded-xl" :style="{background: bgColor}">
    <component :is="props.app.logo" class="w-[24px]" :style="{'--logo-color': props.app.colorCode}" />
  </div>
  
</template>

<style scoped lang="scss">
  :deep(path),
  :deep(circle),
  :deep(rect) {
    fill: var(--logo-color);
  }
</style>