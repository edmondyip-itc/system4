<script setup lang="ts">
import DarkModeButton from '../global/darkModeButton.vue'
import LogoutButton  from '../global/logoutButton.vue'
import SearchBar from '../global/searchBar.vue'
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