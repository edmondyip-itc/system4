<script setup>
import LoginItem from '../components/login/LoginItem.vue'
import WelcomeMessage from '../components/login/WelcomeMessage.vue'
</script>

<template>
  <section class="bg-primary-foreground h-screen w-full flex justify-center items-stretch">
    <WelcomeMessage />
    <LoginItem />
  </section>
</template>
