<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import navLinks from '@/lib/nav'

const home = [{
    key: 'home',
    label: 'Home',
    basePath: '/',
    logo: 'home',
    colorCode: '#0077B6'
}]

const navList = [...home, ...navLinks]
</script>

<template>
  <nav class="p-2 list-none bg-white rounded-md">
    <li class="p-2" v-for="link in navList" :key="link.label">
      <RouterLink class="flex gap-1 p-2 rounded-lg" :to="link.basePath">
        <Icon class="text-xl" :icon="link.icon" />
        {{ link.label }}
      </RouterLink>
    </li>
  </nav>
</template>

<style lang="scss">
nav {
  li {
    a {
      @apply text-slate-700;
      &.router-link-active, &:hover {
        @apply bg-primary text-white;
      }
    }
  }
}
</style>