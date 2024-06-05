<script setup>
import PageHeader from '@/components/layout/PageHeader.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLogin = route.name === 'login'
</script>

<template>
  <div id="layout">
    <PageHeader />
    <main>
      <slot>
      </slot>
    </main>
  </div>
</template>