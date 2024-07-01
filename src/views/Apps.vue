<script setup>
import { appList } from '@/lib/apps'
import Breadcrumb from '@/components/global/Breadcrumb.vue'
import TableFilters from '@/components/global/TableFilters.vue'
import DataTable from '@/components/global/table/DataTable.vue'
import { dealers } from '@/lib/data'

const props = defineProps(['appId','name'])
const pageId = `${props.appId}-${props.name}`
const pageInfo = appList[pageId]
</script>

<template>
  <section class="">
    <header>
      <h1>
        {{ pageInfo.label }}
      </h1>
      <p>
        {{ pageInfo.description }}
      </p>
      <Breadcrumb :appId="appId" :pageInfo="pageInfo" />
    </header>
    <TableFilters />
    <div class="h-screen bg-background p-4 rounded-t-2xl">
      <DataTable :data="dealers" />
    </div>
  </section>
</template>