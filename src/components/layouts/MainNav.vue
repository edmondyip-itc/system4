<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import navLinks from '@/lib/nav'
</script>

<template>
  <nav class="w-full p-2 list-none bg-white rounded-md">
    <li class="p-2" v-for="link in navLinks" :key="link.label">
      <RouterLink class="flex gap-1 p-2 rounded-lg" :to="link.path">
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