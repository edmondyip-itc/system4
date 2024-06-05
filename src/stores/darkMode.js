import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', () => {
  const mode = ref(true)
  function toggleMode(){
    mode.value = !mode.value
  }
  return { mode, toggleMode }
})