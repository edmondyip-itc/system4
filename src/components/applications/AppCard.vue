<script setup>
import { RouterLink } from 'vue-router'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import Logo from '@/components/logos/Logo.vue'

const props = defineProps(['app', 'index'])
</script>

<template>
  <CardHeader class="p-4 z-10">
    <CardTitle class="flex justify-between items-end gap-1">
      <div class="rounded-tl-xl absolute bottom-0 right-0 p-2 flex justify-between" :style="{background: props.app.colorCode}">
        <div class="text-white">{{ (props.index + 1).toString().padStart(2, '0') }}</div>
      </div>
      <RouterLink :to="app.path">
        {{ props.app.label }}
      </RouterLink>
      <Logo :app="props.app"/>
    </CardTitle>
    <CardDescription>
      {{ props.app.description }}
    </CardDescription>
  </CardHeader>
  <div class="absolute bottom-0 left-0 right-0 h-1 transition-all group-hover/item:h-2 z-0" :style="{backgroundColor: props.app.colorCode}"></div>
</template>