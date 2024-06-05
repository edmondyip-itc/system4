<script setup>
import { useDark, useToggle } from '@vueuse/core'
import Button from '../ui/button/Button.vue';
import IconSun from '@/components/icons/IconSun.vue'
import IconMoon from '@/components/icons/IconMoon.vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button class="self-end" @click="toggleDark()" >
    <IconSun v-if="!isDark" icon="ri:sun-fill" />
    <IconMoon v-else icon="ri:moon-fill" />
  </Button>
</template>