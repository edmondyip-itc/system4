import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useColor = defineStore('color', () => {
  const appColor = ref('#48cae4')
  const updateColor = (color) => {
    appColor.value = color
  }
  return { appColor, updateColor }
})

export const useSidebar = defineStore('sidebar', () => {
  const sidebarIsOpen = ref(true)
  const toggleSidebar = () => {
    sidebarIsOpen.value = !sidebarIsOpen.value
  }
  return { sidebarIsOpen, toggleSidebar }
})