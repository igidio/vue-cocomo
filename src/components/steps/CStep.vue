<template>
  <GlobalTable :headers="columns" :data="mapData"></GlobalTable>
  <GlobalSelect
    placeholder="Seleccione el lenguaje de programación"
    :options="
      languages_data.map((language) => ({
        label: language.label,
        value: language.code_lines
      }))
    "
    v-model:selected_value="c_step"
  />

  <div class="text-end flex flex-col">
    <div>Lenguaje seleccionado: <span class="font-bold">{{ c_step.label }}, {{ c_step.value }} LDC/PF</span></div>
    <div>Líneas de código: <span class="font-bold">{{ lines_of_code.toFixed(2) }}</span></div>
    <div>Kilo líneas de código: <span class="font-bold">{{ kilolines_of_code.toFixed(2) }}</span></div>
  </div>
</template>

<script setup lang="ts">
import GlobalTable from '@/components/GlobalTable.vue'
import GlobalSelect from '@/components/GlobalSelect.vue'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { computed, type ComputedRef } from 'vue'
import { languages_data } from '@/data/sample'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'

//const { lines_of_code } = useProcessStore()
const { c_step, lines_of_code, kilolines_of_code } = storeToRefs(useProcessStore())

const columns: header_column_interface[] = [
  {
    label: 'Nro.',
  },
  {
    label: 'Lenguaje de programación',
  },
  {
    label: 'Líneas de código por PF',
  },
]

const mapData: ComputedRef<table_data_interface[][]> = computed(() => {
  return languages_data.map((item, index) => [
    {
      class: 'font-medium',
      value: index + 1,
    },
    {
      class: 'text-left',
      value: item.label,
    },
    {
      class: 'text-center',
      value: item.code_lines,
    },
  ])
})
</script>
