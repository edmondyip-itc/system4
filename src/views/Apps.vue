<script setup>
import { productList, appList } from '@/lib/apps'
const props = defineProps(['appId','name'])
const pageId = `${props.appId}-${props.name}`
const pageInfo = appList[pageId]
</script>

<template>
  <section>
    <header>
      <h1>
        {{ pageInfo.label }}
      </h1>
    </header>
    
  </section>
</template>