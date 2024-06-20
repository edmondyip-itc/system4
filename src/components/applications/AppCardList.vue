<script setup>
import { Card } from '@/components/ui/card'
import AppCard from './AppCard.vue'

const props = defineProps(['apps'])
</script>

<template>
  <Card v-for="(app, index) in props.apps" :key="app.id" class="flex flex-col justify-between min-h-[150px] m-0 p-0 overflow-hidden relative group/item transition-all hover:-m-1 hover:p-1 hover:drop-shadow-xl" >
    <AppCard :app="app" :index="index" />
  </Card>
</template>