<template>
  <span class="font-bold text-3xl mb-3">Cálculo de PFA</span>
  <GlobalTable :headers="columns" :data="mapData"></GlobalTable>
  <BModalCreate title="Crear elemento"/>
  <div class="text-end flex flex-col">
    <div>Suma total: <span class="font-bold">{{ afp_sum }}</span></div>
    <div>Factores de ajuste: <span class="font-bold">{{ afp_result.toFixed(2) }}</span></div>
  </div>
</template>

<script setup lang="ts">
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { computed, type ComputedRef } from 'vue'
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'
import GlobalTable from '@/components/GlobalTable.vue'
import BModalCreate from '@/components/modal/BModalCreate.vue'

const { afp_sum, afp_result } = useProcessStore()
const { b_step } = storeToRefs(useProcessStore())

const columns: header_column_interface[] = [
  {
    label: 'Nro.'
  },
  {
    label: 'Características',
  },
  {
    label: 'Puntuación'
  }
]

const mapData:ComputedRef<table_data_interface[][]> = computed(() => {
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
    }
  ])
})
</script>
