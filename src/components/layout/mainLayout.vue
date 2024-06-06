<script setup>
import { computed, watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import PageHeader from '@/components/layout/PageHeader.vue'
import { useLogin } from '@/stores/login'

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
    <main>
      <slot>
      </slot>
    </main>
  </div>
</template>