<template>
  <StepCard :title="steps[0].title" :content="steps[0].content">
    <AModalModify label="Modificar elemento" v-model="is_open" :id="selected" />
    <template #top>
      <div class="flex flex-col gap-2 mb-4">
        <GlobalTable :headers="columns" :data="mapData" :on_click="open_modal" />
        <div class="flex flex-row w-full justify-center">
          <AModalCreate label="Crear elemento" />
        </div>
      </div>
    </template>
    <template #bottom>
      <div class="flex flex-row w-full gap-2">
        <div class="w-1/2 flex flex-col gap-2 justify-end">
          <IconItem
            v-if="ufp_result === 0"
            label="Debes introducir las funciones para obtener el resultado."
            :icon="CircleAlert"
          />
        </div>
        <div
          class="text-end flex flex-col bg-gray-50 p-2 rounded-md border border-gray-300 gap-1 grow"
        >
          <div v-for="(res, index) in typeResults" :key="index">
            {{ res.label }} <span class="font-bold">{{ res.value }}</span>
          </div>
          <div>
            Resultado: <span class="font-bold"> {{ ufp_result }}</span>
          </div>
        </div>
      </div>
    </template>
  </StepCard>
</template>

<script setup lang="ts">
import { computed, type ComputedRef, ref } from 'vue'
import { storeToRefs } from 'pinia'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'

import GlobalTable from '@/components/GlobalTable.vue'
import { getComplexity } from '@/data/objects/get_complexity.ts'
import { useProcessStore } from '@/store/process.store.ts'
import { WeightEnum } from '@/data/enums/weight.enum.ts'
import AModalCreate from '@/components/modal/AModalCreate.vue'
import AModalModify from '@/components/modal/AModalModify.vue'
import { CircleAlert } from 'lucide-vue-next'
import IconItem from '@/components/steps/IconItem.vue'
import StepCard from '@/components/steps/StepCard.vue'
import { steps } from '../../data/sample'

const { a_step, ufp_result, typeResults } = storeToRefs(useProcessStore())

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

const mapData: ComputedRef<table_data_interface[][]> = computed(() => {
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
      tooltip:
        item.weight === WeightEnum.LOW &&
        `Peso ${item.weight.toLowerCase()}: ${getComplexity[item.type][item.weight]}`,
    },
    {
      class: 'text-center',
      value: item.weight === WeightEnum.MEDIUM ? '✅' : '',
      tooltip:
        item.weight === WeightEnum.MEDIUM &&
        `Peso ${item.weight.toLowerCase()}: ${getComplexity[item.type][item.weight]}`,
    },
    {
      class: 'text-center',
      value: item.weight === WeightEnum.HIGH ? '✅' : '',
      tooltip:
        item.weight === WeightEnum.HIGH &&
        `Peso ${item.weight.toLowerCase()}: ${getComplexity[item.type][item.weight]}`,
    },
  ])
})

// Modal
const is_open = ref(false)
const selected = ref(NaN)
const open_modal = (id: number) => {
  selected.value = id
  is_open.value = true
}
</script>
