<script setup>
import LoginItem from '../components/login/LoginItem.vue'
import WelcomeMessage from '../components/login/WelcomeMessage.vue'
</script>

<template>
  <section class="rounded-xl bg-primary-foreground w-8/12 mx-auto flex justify-center items-stretch">
    <WelcomeMessage />
    <LoginItem />
  </section>
</template>
