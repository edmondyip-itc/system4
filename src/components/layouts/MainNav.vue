<script setup>
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
import navLinks from '@/lib/nav'
import { useSidebar } from '@/stores/app'

const store = useSidebar()
</script>

<template>
  <nav class="w-full p-2 list-none">
    <li class="p-2" v-for="link in navLinks" :key="link.label">
      <RouterLink class="flex gap-2 p-2 rounded-lg text-foreground" :to="link.path">
        <Icon class="text-xl" :icon="link.icon" />
        <template v-if="store.sidebarIsOpen">
          {{ link.label }}
        </template>
      </RouterLink>
    </li>
  </nav>
</template>
