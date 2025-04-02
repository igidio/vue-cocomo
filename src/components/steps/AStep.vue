<template>
  <span>Entradas</span>
  <GlobalTable :headers="columns" :data="mapData"></GlobalTable>
  <div class="text-end flex flex-col">
    <div v-for="res in typeResults">
      {{ res.label }} <span class="font-bold">{{ res.value }}</span>
    </div>
    <div>
      Resultado: <span class="font-bold"> {{ ufpResult }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { WeightEnum } from '@/data/enums/weight.enum.ts'
import GlobalTable from '@/components/GlobalTable.vue'
import { ufpEnum } from '@/data/enums/ufp.enum.ts'
import { computed, type ComputedRef } from 'vue'
import { getComplexity } from '@/data/objets/get_complexity.ts'
import type { table_data_interface } from '@/data/interfaces'
import CheckIcon from '@/components/icon/CheckIcon.vue'

const sampleData = [
  {
    value: 'Ingreso al sistema (login)',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Registro de obra',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Registro de mano de obra',
    weight: WeightEnum.HIGH,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Registro de material',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Mensaje de error al ingresar al sistema',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Reporte de obra',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Reporte de seguimiento de obras',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Reporte de materiales',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Listado de obras en ejecución',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Lista de clientes',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Listado de materiales',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Listado de obras canceladas',
    weight: WeightEnum.HIGH,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Listado de items de obra',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
]
const columns = [
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

const mapData:ComputedRef = computed<table_data_interface[][]>(() => {
  return sampleData.map((item, index) => [
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

const ufpResult = computed(() => {
  return sampleData.reduce((acc, item) => {
    acc += getComplexity[item.type][item.weight]
    return acc
  }, 0)
})

const typeResults = computed(() => {
  return sampleData.reduce(
    (acc, item) => {
      const type = item.type
      acc[type] = acc[type] || { label: type, value: 0 }
      acc[type].value += getComplexity[type][item.weight]
      return acc
    },
    {} as Record<string, { label: string; value: number }>,
  )
})
</script>
