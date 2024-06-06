<script setup>
import { useRouter } from 'vue-router'
import Button from '../ui/button/Button.vue';
import { useLogin } from '@/stores/login'

const store = useLogin()
const router = useRouter()

const logout = () => {
  store.loginAction(false)
  router.push({ name: 'login'})
}
</script>

<template>
  <Button @click="logout" size="xs">Logout</Button>
</template>