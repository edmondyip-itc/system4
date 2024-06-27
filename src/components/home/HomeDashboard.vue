<script setup>
import { ref } from 'vue';
import { productList, appList } from '@/lib/apps'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import AppCardListTabs from '../applications/AppCardListTabs.vue'
import AppCardList from '../applications/AppCardList.vue';
import ColorBackground from '@/components/global/ColorBackground.vue'

const productTabs = Object.values(productList)
const allAppTabContent = Object.values(appList)
const defaultColor = '#48cae4'
const color = ref(defaultColor)

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

const updateColor = (colorCode) => {
  color.value = colorCode
}
</script>

<template>
  <Tabs default-value="all" class="relative z-20">
    <TabsList variant="big">
      <TabsTrigger @click="updateColor(defaultColor)" value="all" variant="big">
        All
      </TabsTrigger>
      <TabsTrigger @click="updateColor(app.colorCode)" v-for="app in productTabs" :value="app.id" variant="big">
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
  <!-- <ColorBackground :color="color" /> -->
</template>