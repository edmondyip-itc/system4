<script setup>
import { RouterLink } from 'vue-router'

const navLinks = [
  {
    label: 'Home',
    link: '/home',
    
  }
]
</script>

<template>
  <nav>
    <li>
      <RouterLink />
    </li>
  </nav>
</template>