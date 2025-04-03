<template>
  <span>Entradas</span>
  <GlobalTable :headers="columns" :data="mapData"></GlobalTable>
  <div class="text-end flex flex-col">
    <div v-for="(res, index) in typeResults" :key="index">
      {{ res.label }} <span class="font-bold">{{ res.value }}</span>
    </div>
    <div>
      Resultado: <span class="font-bold"> {{ ufp_result }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WeightEnum } from '@/data/enums/weight.enum.ts'
import GlobalTable from '@/components/GlobalTable.vue'
import { computed, type ComputedRef } from 'vue'
import { getComplexity } from '@/data/objets/get_complexity.ts'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'

const  { ufp_result, typeResults } = useProcessStore()
const { a_step } = storeToRefs(useProcessStore())

const columns: header_column_interface[] = [
  {
    label: 'Nro.',
  },
  {
    label: 'Nombre',
  },
  {
    label: 'Tipo',
  },
  {
    label: 'Bajo',
    class: 'w-[50px]',
  },
  {
    label: 'Medio',
    class: 'w-[50px]',
  },
  {
    label: 'Alto',
    class: 'w-[50px]',
  },
]

const mapData:ComputedRef<table_data_interface[][]> = computed(() => {
  return a_step.value.map((item, index) => [
    {
      class: 'font-medium',
      value: index + 1,
    },
    {
      class: 'text-left',
      value: item.value,
    },
    {
      class: 'text-left',
      value: item.type,
    },
    {
      class: 'text-center',
      value: item.weight === WeightEnum.LOW ? '✅' : '',
      tooltip: (item.weight === WeightEnum.LOW) && `Peso ${item.weight.toLowerCase()}: ${getComplexity[item.type][item.weight]}`
    },
    {
      class: 'text-center',
      value: item.weight === WeightEnum.MEDIUM ? '✅' : '',
      tooltip: (item.weight === WeightEnum.MEDIUM) && `Peso ${item.weight.toLowerCase()}: ${getComplexity[item.type][item.weight]}`
    },
    {
      class: 'text-center',
      value: item.weight === WeightEnum.HIGH ? '✅' : '',
      tooltip: (item.weight === WeightEnum.HIGH) && `Peso ${item.weight.toLowerCase()}: ${getComplexity[item.type][item.weight]}`
    },
  ])
})


</script>
