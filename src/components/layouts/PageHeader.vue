<script setup lang="ts">
import DarkModeButton from '../global/DarkModeButton.vue'
import LogoutButton  from '../global/LogoutButton.vue'
import SearchBar from '../global/SearchBar.vue'
</script>

<template>
  <header class="w-full p-2">
    <div class="flex align-middle justify-end gap-2">
      <SearchBar />
      <LogoutButton/>
      <DarkModeButton/>
    </div>
  </header>
</template>