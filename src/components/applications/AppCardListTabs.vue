<script setup>
import { watchEffect } from 'vue'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { useApp } from '@/stores/app'
import AppCardList from './AppCardList.vue'

const props = defineProps(['apps', 'app'])
const store = useApp()
watchEffect(() => {
  store.updateColor(props.app.colorCode)
})
const appListContent = (tag) => {
  return props.apps.filter((app) => {
    return app.tags.includes(tag)
  })
}
</script>

<template>
  <section>
    <Tabs default-value="all">
      <TabsList class="h-auto">
        <TabsTrigger value="all">
          All 
          <Badge variant="secondary" class="text-[10px] p-0 px-1.5 ml-1">{{ props.apps.length }}</Badge>
        </TabsTrigger>
        <TabsTrigger v-for="subSection in props.app.subSections" :value="subSection.id" :key="subSection.id">
          {{ subSection.label }}
          <Badge variant="secondary" class="text-[10px] p-0 px-1.5 ml-1">{{ appListContent(subSection.id).length }}</Badge>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="all" class="grid grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
        <AppCardList :apps="Object.values(props.apps)" />
      </TabsContent>
      <TabsContent v-for="subSection in props.app.subSections" :value="subSection.id" :key="subSection.id" class="grid grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
        <AppCardList :apps="appListContent(subSection.key)" />
      </TabsContent>
    </Tabs>
  </section>
</template>