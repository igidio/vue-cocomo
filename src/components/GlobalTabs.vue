<template>
  <Tabs class="w-full flex flex-row" orientation="vertical" v-model="selected_model" >
    <TabsList class="grid w-[220px] grid-cols-1 h-fit">
      <TabsTrigger :value="element.value" v-for="(element, index) in list" :key="index">
        {{ element.label }}
      </TabsTrigger>
    </TabsList>
    <TabsContent :value="value" v-for="value in list.map((item) => item.value)" :key="value">
      <Card class="p-6">
        <div>
          <span class="font-bold border-b-black mb-2 inline-block">{{ list.find((item) => item.value === value)?.label }}</span>
          <hr />
        </div>
        <slot :name="value" />
      </Card>
    </TabsContent>
  </Tabs>
</template>

<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { ref } from 'vue'


const selected_model = ref("ufp")

defineProps<{
  list: {
    label: string
    value: string
  }[]
}>()
</script>
