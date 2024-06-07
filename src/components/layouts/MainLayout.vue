<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useLogin } from '@/stores/login'
import PageHeader from '@/components/layouts/PageHeader.vue'
import NavBar from '@/components/layouts/MainNav.vue'

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
  <div id="layout" v-if="!isLogin" class="h-screen bg-primary pt-8">
    <main>
      <slot>
      </slot>
    </main>
  </div>
  <div id="layout" v-else>
    <PageHeader />
    <NavBar />
    <main>
      <slot>
      </slot>
    </main>
  </div>
</template>