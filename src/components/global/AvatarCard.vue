<script setup>
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'

const imgUrl = new URL('@/assets/avatar1.png', import.meta.url).href
</script>

<template>
  <Card class="overflow-hidden mb-5 w-[500px] flex">
    <Avatar size="lg" class="m-4">
      <AvatarImage :src="imgUrl" alt="User" />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>
    <CardHeader>
      <CardTitle>
        Hello Paul!
      </CardTitle>
      <CardTitle>
        Welcome Back to System4!
      </CardTitle>
      <CardDescription>
        Have a nice day at work
      </CardDescription>
    </CardHeader>
  </Card>
</template>