<script setup>
import ItcLogo from '../logos/ItcLogo.vue'
import RandomText from './RandomText.vue'
</script>

<template>
  <div id="welcome-message" class="flex flex-col items-center justify-between p-9 text-center min-h-full rounded-r-3xl" >
    <ItcLogo class="w-[100px] h-auto" color="white" />
    <RandomText />
  </div>
</template>

<style lang="scss" scoped>
  #welcome-message {
    background: url('@/assets/background2.jpg') no-repeat center center;
    background-size: cover;
  }
</style>