import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useApp = defineStore('app', () => {
  const appColor = ref('#48cae4')
  const updateColor = (color) => {
    appColor.value = color
  }
  return { appColor, updateColor }
})