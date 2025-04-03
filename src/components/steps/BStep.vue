<template>
  <span class="font-bold text-3xl mb-3">Cálculo de PFA</span>
  <GlobalTable
    :headers="columns"
    :data="mapData"
    :on_click="open_modal"
  />
  <BModalCreate title="Crear elemento"/>
  <div class="text-end flex flex-col">
    <div>Suma total: <span class="font-bold">{{ afp_sum }}</span></div>
    <div>Factores de ajuste: <span class="font-bold">{{ afp_result.toFixed(2) }}</span></div>
  </div>
  <BModalModify
    title="Modificar elemento"
    v-model="is_open"
    :id="selected"
  />
</template>

<script setup lang="ts">
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { computed, type ComputedRef, ref } from 'vue'
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'
import GlobalTable from '@/components/GlobalTable.vue'
import BModalCreate from '@/components/modal/BModalCreate.vue'
import BModalModify from '@/components/modal/BModalModify.vue'

const { b_step, afp_sum, afp_result } = storeToRefs(useProcessStore())

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

// Modal
const is_open = ref(false)
const selected = ref(NaN)
const open_modal = (id: number) => {
  selected.value = id
  is_open.value = true
}
</script>
