<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'

const navLinks = [
  {
    label: 'Home',
    url: '/',
    icon: 'ri:home-smile-2-fill'
  }
]
</script>

<template>
  <nav class="bg-primary list-none">
    <li class="p-2" v-for="link in navLinks" :key="link.label">
      <Icon :icon="link.icon" />
      <RouterLink class="text-white" :to="link.url">
        {{ link.label }}
      </RouterLink>
    </li>
  </nav>
</template>