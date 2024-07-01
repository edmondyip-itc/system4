<script setup>
import { computed, ref } from 'vue'
import ITCLogo from '@/components/logos/ItcLogo.vue'
import MainNav from './MainNav.vue'
import { Icon } from '@iconify/vue'
import { useSidebar } from '@/stores/app'

const store = useSidebar()
const sidebarStyle = computed(() => store.sidebarIsOpen ? 'w-[200px]' : 'w-[80px]')
const buttonStyle = computed(() => store.sidebarIsOpen ? 'left-[190px] rotate-0' : 'left-[68px] rotate-180')
const logoStyle = computed(() => store.sidebarIsOpen ? 'w-[70px]' : 'w-[40px]')
</script>

<template>
  <div 
    class="h-screen fixed top-0 bottom-0 left-0 grid grid-rows-[100px_minmax(200px,_1fr)_100px] bg-primary rounded-r-3xl shadow-md transition-all"
    :class="sidebarStyle"
  >
    <button
      class="absolute top-[35px] bg-background rounded-full transition-all"
      @click="store.toggleSidebar()"
      :class="buttonStyle"
    >
      <Icon class="text-2xl" icon="ri:arrow-drop-left-line"/>
    </button>
    <div>
      <ITCLogo class="mx-auto transition-all" :class="logoStyle" />
    </div>
    <MainNav />
  </div>
</template>