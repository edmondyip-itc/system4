<script setup>
import { Icon } from '@iconify/vue'
import { Button } from '@/components/ui/button'
import { dealers } from '@/lib/data'
import Separator from '@/components/global/Separator.vue'
import SearchFilter from '@/components/global/SearchFilter.vue'
import DatePicker from '@/components/global/DatePicker.vue'
</script>

<template>
  <div class="flex justify-between items-center bg-background rounded-2xl px-4 my-2 gap-4 h-[80px]">
    <DatePicker title="Start Date" />
    <Separator orientation="vertical" />
    <SearchFilter :data="dealers" title="dealer" />
    <Separator orientation="vertical" />
    <SearchFilter :data="dealers" title="dealer" />
    <Separator orientation="vertical" />
    <Button>
      <Icon icon="mingcute:search-2-line" class="mr-1 text-lg" /> Filter
    </Button>
  </div>
</template>
