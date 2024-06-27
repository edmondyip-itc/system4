<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from '@/stores/login'
import { useSidebar } from '@/stores/app'
import PageHeader from '@/components/layouts/PageHeader.vue'
import SideBar from './SideBar.vue'

const loginStore = useLogin()
const sideBarStore = useSidebar()
const router = useRouter()
const isLogin = computed(() => loginStore.loginState)
watchEffect(() => {
  if(!isLogin.value) {
    router.push({ name: 'login' })
  }
})
const mainStyle = computed(() => sideBarStore.sidebarIsOpen ? 'pl-[220px]' : 'pl-[100px]')
</script>

<template>
  <div v-if="!isLogin" id="layout" class="h-screen bg-primary">
    <main>
      <slot>
      </slot>
    </main>
  </div>
  <div v-else id="layout" class="bg-primary/10 h-fit min-h-screen transition-all" :class="mainStyle">
    <SideBar />
    <main class="pr-4">
      <PageHeader />
      <slot></slot>
    </main>
  </div>
</template>