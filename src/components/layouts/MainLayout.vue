<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from '@/stores/login'
import PageHeader from '@/components/layouts/PageHeader.vue'
import SideBar from './SideBar.vue'

const store = useLogin()
const router = useRouter()
const isLogin = computed(() => store.loginState)
watchEffect(() => {
  if(!isLogin.value) {
    router.push({ name: 'login' })
  }
})
</script>

<template>
  <div id="layout" v-if="!isLogin" class="h-screen bg-primary">
    <main>
      <slot>
      </slot>
    </main>
  </div>
  <div id="layout" class="h-screen z-0 grid grid-cols-[200px_minmax(500px,_1fr)] grid-rows-[100px_minmax(500px,_1fr)] gap-8 pr-4" v-else>
    <SideBar class="row-span-4" />
    <main>
      <PageHeader />
      <slot></slot>
    </main>
  </div>
</template>