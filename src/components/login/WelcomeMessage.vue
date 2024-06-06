<script setup>
import { reactive } from 'vue'
import ItcLogo from '../icons/itcLogo.vue'
import RandomText from './RandomText.vue'
</script>

<template>
  <div id="welcome-message" class="rounded-xl" >
    <ItcLogo color="white" />
    <RandomText />
  </div>
</template>

<style lang="scss" scoped>
  #welcome-message {
    padding: 50px;
    text-align: center;
    min-height: 100%;
    width: 780px;
    background: url('@/assets/background2.jpg') no-repeat center center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>