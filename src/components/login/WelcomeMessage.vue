<script setup>
import ItcLogo from '../icons/itcLogo.vue'
import RandomText from './RandomText.vue'
</script>

<template>
  <div id="welcome-message">
    <ItcLogo color="white" />
    <RandomText />
  </div>
</template>

<style lang="scss" scoped>
  #welcome-message {
    border-radius: var(--radius);
    padding: 50px;
    text-align: center;
    max-height: 780px;
    min-height: 500px;
    height: 80vh;
    width: 780px;
    background-color: var(--card);
    background: url("@/assets/background2.jpg") no-repeat center center;
    background-size: cover;
    margin: auto 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
</style>