<script setup>
import { useRouter } from 'vue-router'
import { useLogin } from '@/stores/login'
import Button from '../ui/button/Button.vue';

const store = useLogin()
const router = useRouter()

const logout = () => {
  store.loginAction(false)
  router.push({ name: 'login'})
}
</script>

<template>
  <Button @click="logout" size="">Logout</Button>
</template>