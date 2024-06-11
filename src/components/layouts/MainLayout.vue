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
  <div id="layout" v-if="!isLogin" class="h-screen bg-primary pt-8">
    <main>
      <slot>
      </slot>
    </main>
  </div>
  <div id="layout" class="dashboard h-screen bg-primary-foreground" v-else>
    <PageHeader class="col-span-4 row-span-1" />
    <SideBar />
    <main>
      <slot>
      </slot>
    </main>
  </div>
</template>

<style lang="scss">
#layout {
  &.dashboard {
    @apply grid grid-cols-[200px_minmax(500px,_1fr)] grid-rows-[60px_minmax(500px,_1fr)];
  }
}
</style>