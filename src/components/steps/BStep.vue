<template>
  <StepCard :title="steps[1].title" content="Sadasdsad">
    <template #top>
      <div class="flex flex-col gap-2 mb-4">
        <GlobalTable :headers="columns" :data="mapData" :on_click="open_modal" />
        <div class="flex flex-row w-full justify-center">
          <BModalModify label="Modificar elemento" v-model="is_open" :id="selected" />
          <BModalCreate label="Crear elemento" />
        </div>
      </div>
    </template>
    <template #bottom>
      <div class="flex flex-row w-full gap-2">
        <div class="w-1/2 flex flex-col gap-2 justify-end">
          <IconItem
            v-if="afp_result === 0 || b_step.length === 0"
            label="Debes introducir las funciones para obtener un resultado."
            :icon="CircleAlert"
          />
        </div>

        <div
          class="text-end flex flex-col bg-gray-50 p-2 rounded-md border border-gray-300 gap-1 grow"
        >
          <div>
            Suma total: <span class="font-bold">{{ afp_sum }}</span>
          </div>
          <div>
            Factores de ajuste: <span class="font-bold">{{ afp_result.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </template>
  </StepCard>
</template>

<script setup lang="ts">
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { computed, type ComputedRef, ref } from 'vue'
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'
import GlobalTable from '@/components/GlobalTable.vue'
import BModalCreate from '@/components/modal/BModalCreate.vue'
import BModalModify from '@/components/modal/BModalModify.vue'
import { steps } from '@/data/sample'
import StepCard from '@/components/steps/StepCard.vue'
import { CircleAlert } from 'lucide-vue-next'
import IconItem from '@/components/steps/IconItem.vue'

const { b_step, afp_sum, afp_result } = storeToRefs(useProcessStore())

const columns: header_column_interface[] = [
  {
    label: 'Nro.',
  },
  {
    label: 'Características',
  },
  {
    label: 'Puntuación',
  },
]

const mapData: ComputedRef<table_data_interface[][]> = computed(() => {
  return b_step.value.map((item, index) => [
    {
      class: 'font-medium',
      value: index + 1,
    },
    {
      class: 'text-left',
      value: item.value,
    },
    {
      class: 'text-center',
      value: item.score,
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
