<script setup>
import { defineProps } from 'vue'
import { Card } from '@/components/ui/card'
import AppCard from './AppCard.vue'

const props = defineProps(['subSection'])
</script>

<template>
  <Card v-for="(app, index) in props.subSection" class="flex flex-col justify-between m-0 p-0 overflow-hidden relative group/item transition-all hover:-m-1 hover:p-1" >
    <AppCard :app="app" :index="index" />
  </Card>
</template>