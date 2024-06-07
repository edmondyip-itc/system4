<script setup>
import { RouterView } from 'vue-router'
import MainLayout from '@/components/layouts/MainLayout.vue'
import { useTitle } from '@vueuse/core'

const title = useTitle()
title.value = 'System4'
</script>

<template>
  <MainLayout>
    <RouterView/>
  </MainLayout>
</template>