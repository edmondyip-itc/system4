import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLogin = defineStore('login', () => {
  const loginState = ref(false)
  const loginAction = (action) => {
    loginState.value = action
  }
  return { loginState, loginAction }
})