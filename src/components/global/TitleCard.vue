<script setup>
import { defineProps } from 'vue';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'

const props = defineProps(['title', 'description'])
</script>

<template>
  <Card class="overflow-hidden mb-5">
    <div class="background-color h-[150px]">
      <CardHeader class="background-image h-full w-full">
        <CardTitle class="text-5xl">
          {{ props.title }}
        </CardTitle>
        <CardDescription>
          {{ props.description }}
        </CardDescription>
      </CardHeader>
    </div>
  </Card>
</template>

<style scoped lang="scss">
.background-image {
  background-image: url('@/assets/welcome2.png');
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 50%;
}
</style>