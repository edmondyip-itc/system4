<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const show = ref(true)
const close = () => {
  return show.value = false
}
</script>

<template>
  <section v-if="show">
    <Card class="bg-background/50 relative">
      <CardHeader>
        <CardTitle class="text-3xl">
          Hello Paul! <br/>  Welcome Back to System4! 👋
        </CardTitle>
        <CardDescription>
          <span>Have a nice day at work today</span>
        </CardDescription>
        <Icon
          @click="close"
          class="text-2xl absolute top-2 right-2 cursor-pointer"
          icon="ri:close-fill"
        />
      </CardHeader>
    </Card>
  </section>
</template>