<script setup>
import { defineProps, onMounted } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import AppCardList from './AppCardList.vue'
import { useApp } from '@/stores/app'

const props = defineProps(['apps'])
const allApps = props.apps.subSections.map((subSection) => subSection.links).flat()
const store = useApp()
store.updateColor = props.apps.colorCode 
</script>

<template>
  <section>
    <Tabs default-value="all">
      <TabsList class="p-0 h-auto mb-4">
        <TabsTrigger value="all">
          All 
          <Badge class="text-[10px] p-0 px-1.5 ml-1">{{ allApps.length }}</Badge>
        </TabsTrigger>
        <TabsTrigger v-for="subSection in apps.subSections" :value="subSection.key">
          {{ subSection.label }}
          <Badge class="text-[10px] p-0 px-1.5 ml-1">{{ subSection.links.length }}</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" class="grid grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
        <AppCardList :subSection="allApps" />
      </TabsContent>
      <TabsContent v-for="subSection in apps.subSections" :value="subSection.key" class="grid grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
        <AppCardList :subSection="subSection.links" />
      </TabsContent>
    </Tabs>
  </section>
</template>