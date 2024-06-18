<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import { productList } from '@/lib/apps'

const home = [{
    key: 'home',
    label: 'Home',
    path: '/',
    logo: 'ri:home-smile-2-fill',
    colorCode: '#0077B6'
}]

const navlinks = Object.values(productList)

const navList = [...home, ...navlinks]
</script>

<template>
  <nav class="p-2 list-none bg-white rounded-md">
    <li class="p-2" v-for="link in navList" :key="link.label">
      <RouterLink class="flex gap-1 p-2 rounded-lg" :to="link.path">
        <Icon class="text-xl" :icon="link.logo" />
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