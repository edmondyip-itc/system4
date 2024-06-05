<script setup>
import LoginItem from '../components/login/LoginItem.vue'
import WelcomeMessage from '../components/login/WelcomeMessage.vue'
</script>

<template>
  <section>
    <WelcomeMessage />
    <LoginItem />
  </section>
</template>

<style lang="scss" scoped>
  section {
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    border-radius: var(--radius);
    background: var(--foreground);
  }
</style>