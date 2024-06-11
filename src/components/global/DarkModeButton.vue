<script setup>
import { useDark, useToggle } from '@vueuse/core'
import Button from '../ui/button/Button.vue';
import { Icon } from '@iconify/vue'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <Button class="self-end" @click="toggleDark()" >
    <Icon v-if="!isDark" icon="ri:sun-fill" />
    <Icon v-else icon="ri:moon-fill" />
  </Button>
</template>