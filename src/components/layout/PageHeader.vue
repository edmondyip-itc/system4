<script setup lang="ts">
import DarkModeButton from '../global/darkModeButton.vue';
</script>

<template>
  <header>
    <div class="container">
      <DarkModeButton/>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  padding: 5px;
  .container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
}
</style>