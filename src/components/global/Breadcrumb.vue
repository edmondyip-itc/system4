<script setup>
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Icon } from '@iconify/vue'
import { productList } from '@/lib/apps';

const props = defineProps(['appId', 'pageInfo'])
const productInfo = productList[props.appId]
const hasSubsection = productInfo.subSections.length > 0
const subSectionInfo = (id) => {
  return props.pageInfo?.tags.includes(id)
}
</script>

<template>
  <Breadcrumb class=" p-2 rounded-lg mb-4">
    <BreadcrumbList>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">
          <Icon class="text-xl" icon="ri:home-smile-2-fill" />
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
      <BreadcrumbItem v-if="productInfo">
        <BreadcrumbLink :href="productInfo.path">
          {{ productInfo.label }}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <template v-if="hasSubsection" v-for="subSection in productInfo.subSections">
        <template v-if="subSectionInfo(subSection.id)">
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink :href="productInfo.path">
              {{ subSection.label }}
            </BreadcrumbLink>
          </BreadcrumbItem>
        </template>
      </template>
      <BreadcrumbSeparator />
      <BreadcrumbItem>
        <BreadcrumbPage v-if="pageInfo">{{ pageInfo.label }}</BreadcrumbPage>
      </BreadcrumbItem>
    </BreadcrumbList>
  </Breadcrumb>
</template>