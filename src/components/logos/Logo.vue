<script setup>
import { defineProps } from 'vue'
import hex2rgba from '@/lib/color'

const props = defineProps(['app'])
</script>

<template>
  <div class="p-3 rounded-xl" :style="{background: hex2rgba(props.app.colorCode, 0.3)}">
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