<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'

const show = ref(true)
const close = () => {
  return show.value = false
}
</script>

<template>
  <section class="h-full relative overflow-hidden rounded-xl bg-background/50" v-if="show">
    <div class="relative z-20 p-10">
      <h1>
        Hello Paul! <br/>  Welcome Back to System4! 👋
      </h1>
      <span>Have a nice day at work today</span>
      <Button @click="close" class="absolute top-0 right-0" variant="small">
        <Icon icon="ri:close-fill" /> close
      </Button>
    </div>
  </section>
</template>