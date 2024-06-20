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
const applicationsList = (key) => {
  return allAppTabContent.filter((app) => app.id.match(/^([^-])+/g)[0] === key)
}

const productTabs = Object.values(productList)
const allAppTabContent = Object.values(appList)
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
        <AppCardList :apps="allAppTabContent" />
      </div>
    </TabsContent>
    <TabsContent v-for="app in productTabs" :value="app.id">
      <AppCardListTabs v-if="app.subSections" :app="app" :apps="applicationsList(app.key)" />
      <div v-else class="grid grid-cols-4 auto-rows-[minmax(120px,_1fr)] gap-4">
        <AppCardList :apps="applicationsList(app.id)" />
      </div>
    </TabsContent>
  </Tabs>
  <HomeBackground :color="color" />
</template>