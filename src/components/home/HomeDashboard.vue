<script setup>
import { computed } from 'vue';
import { useApp } from '@/stores/app'
import { productList, appList } from '@/lib/apps'
import hex2rgba from '@/lib/color';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AppCardListTabs from '../applications/AppCardListTabs.vue'
import AppCardList from '../applications/AppCardList.vue';
import HomeBackground from './HomeBackground.vue'

const store = useApp()
const color = computed(() => hex2rgba(store.appColor,1))
const productTabs = Object.values(productList)
const allAppTabContent = Object.values(appList)

const regex = /^([^-])+/g
const applicationsList = (id) => {
  const list = allAppTabContent.filter((app) => app.id.match(regex)[0] === id)
  return applicationsListMapPath(list)
}

const applicationsListMapPath = (list) => {
  const mapList = list.map((app) => {
    const id = app.id.match(regex)[0]
    const { path, ...apps } = app
    return {
      ...apps,
      path:  `${productList[app.id.match(regex)[0]].path}${app.path}`
    }
  })
  return mapList
}
</script>

<template>
  <Tabs default-value="all">
    <TabsList variant="big">
      <TabsTrigger value="all" variant="big">
        All
      </TabsTrigger>
      <TabsTrigger v-for="app in productTabs" :value="app.id" variant="big">
        {{ app.label }}
      </TabsTrigger>
    </TabsList>
    <TabsContent value="all">
      <div class="grid grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
        <AppCardList :apps="applicationsListMapPath(allAppTabContent)" />
      </div>
    </TabsContent>
    <TabsContent v-for="app in productTabs" :value="app.id">
      <AppCardListTabs v-if="app.subSections" :app="app" :apps="applicationsList(app.id)" />
      <div v-else class="grid grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
        <AppCardList :apps="applicationsList(app.id)" />
      </div>
    </TabsContent>
  </Tabs>
  <HomeBackground :color="color" />
</template>