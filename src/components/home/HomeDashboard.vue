<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
</script>

<template>
  <Tabs default-value="all">
    <TabsList class="bg-inherit">
      <TabsTrigger value="all" class="text-3xl">
        All
      </TabsTrigger>
      <TabsTrigger value="apex-v3">
        ApexV3
      </TabsTrigger>
      <TabsTrigger value="system4">
        System4
      </TabsTrigger>
      <TabsTrigger value="product">
        Product
      </TabsTrigger>
    </TabsList>
    <TabsContent value="all">
      All
    </TabsContent>
    <TabsContent value="apex-v3">
      Apex V3
    </TabsContent>
    <TabsContent value="system4">
      System4
    </TabsContent>
    <TabsContent value="product">
      Product
    </TabsContent>
  </Tabs>
</template>