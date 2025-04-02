<template>
  <span>Entradas</span>
<GlobalTable caption="Cálculo de PSA" :headers="columns" :data="mapData"></GlobalTable>

  <span><span class="font-bold">Resultado:</span> {{ ufpResult }}</span>
</template>

<script setup lang="ts">
import { WeightEnum } from '@/data/enums/weight.enum.ts'
import GlobalTable from '@/components/GlobalTable.vue'
import { ufpEnum } from '@/data/enums/ufp.enum.ts'
import { computed } from 'vue'

const sampleData = [
  {
    value: 'Ingreso al sistema (login)',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS
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
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Reporte de obra',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Reporte de seguimiento de obras',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Reporte de materiales',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS,
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
  }
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
    class: 'text-right w-[50px]',
  }
]

const mapData = computed(() => {
  return sampleData.map((item, index) => {
    return [
      index + 1,
      item.value,
      item.type,
      item.weight === WeightEnum.LOW,
      item.weight === WeightEnum.MEDIUM,
      item.weight === WeightEnum.HIGH
    ]
  })
})

const getComplexity = {
  [ufpEnum.EXTERNAL_INPUTS]: {
    [WeightEnum.LOW]: 3,
    [WeightEnum.MEDIUM]: 4,
    [WeightEnum.HIGH]: 6
  },
  [ufpEnum.EXTERNAL_OUTPUTS]: {
    [WeightEnum.LOW]: 4,
    [WeightEnum.MEDIUM]: 5,
    [WeightEnum.HIGH]: 7
  },
  [ufpEnum.EXTERNAL_QUERIES]: {
    [WeightEnum.LOW]: 3,
    [WeightEnum.MEDIUM]: 4,
    [WeightEnum.HIGH]: 6
  },
  [ufpEnum.INTERNAL_LOGICAL_FILES]: {
    [WeightEnum.LOW]: 7,
    [WeightEnum.MEDIUM]: 10,
    [WeightEnum.HIGH]: 15
  },
  [ufpEnum.EXTERNAL_INTERFACE_FILES]: {
    [WeightEnum.LOW]: 5,
    [WeightEnum.MEDIUM]: 7,
    [WeightEnum.HIGH]: 10
  },
}

const ufpResult = computed(() => {
  return sampleData.reduce((acc, item) => {
    acc += getComplexity[item.type][item.weight]
    return acc
  }, 0)
})
</script>
