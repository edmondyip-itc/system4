<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import Logo from '@/components/icons/Logo.vue'
import { CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const props = defineProps(['app', 'index'])
</script>

<template>
  <CardHeader class="z-10">
    <CardTitle class="flex justify-between items-end">
      <div class="rounded-tl-xl absolute bottom-0 right-0 p-2 flex justify-between" :style="{background: props.app.colorCode}">
        <div class="text-white">{{ (props.index + 1).toString().padStart(2, '0') }}</div>
      </div>
      <RouterLink :to="props.app.path">
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