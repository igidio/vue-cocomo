<template>
  <GlobalTable :headers="columns" :data="mapData" />
  <div class="text-end flex flex-col">
    <div>Cálculo de esfuerzo: <span class="font-bold">{{ effort_estimation }}</span></div>
    <div>Cálculo de tiempo: <span class="font-bold">{{ time_estimation }}</span></div>
    <div>Nro. de personas: <span class="font-bold">{{ team_size_calculation }}</span></div>
  </div>
</template>

<script setup lang="ts">
import { software_data } from '../../data/sample'
import GlobalTable from '@/components/GlobalTable.vue'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'

const { effort_estimation, time_estimation, team_size_calculation } = storeToRefs(useProcessStore())


const columns: header_column_interface[] = [
  { label: 'Software' },
  { label: 'A' },
  { label: 'B' },
  { label: 'C' },
  { label: 'D' },
]

const mapData: table_data_interface[][] = Object.entries(software_data).map(
  ([key, values]) => [
    { value: key },
    { value: values.A },
    { value: values.B },
    { value: values.C },
    { value: values.D },
  ],
)
</script>
