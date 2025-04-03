<template>
  <span class="font-bold text-3xl mb-3">Aplicación de COCOMO</span>
  <div class="flex flex-row gap-6 w-full">
    <div class="w-1/2">
      <GlobalTable :headers="columns" :data="mapData" />
    </div>
    <div class="flex flex-col grow gap-2">
      <span>Selecciona el modelo COCOMO</span>
      <GlobalSelect
        placeholder="Seleccione"
        :options="
          Object.entries(software_data).map(([key, value]) => ({
            label: key,
            value: value,
          }))
        "
        v-model:selected_value="d_step"
      />

      <div class="text-end flex flex-col">
        <div>
          Cálculo de esfuerzo: <span class="font-bold">{{ effort_estimation }} personas/mes</span>
        </div>
        <div>
          Cálculo de tiempo: <span class="font-bold">{{ time_estimation }} meses</span>
        </div>
        <div>
          Nro. de personas: <span class="font-bold">{{ team_size_calculation }} personas</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { languages_data, software_data } from '../../data/sample'
import GlobalTable from '@/components/GlobalTable.vue'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import GlobalSelect from '@/components/GlobalSelect.vue'

const { d_step, effort_estimation, time_estimation, team_size_calculation } =
  storeToRefs(useProcessStore())

const columns: header_column_interface[] = [
  { label: 'Software' },
  { label: 'A' },
  { label: 'B' },
  { label: 'C' },
  { label: 'D' },
]

const mapData: table_data_interface[][] = Object.entries(software_data).map(([key, values]) => [
  { value: key },
  { value: values.A },
  { value: values.B },
  { value: values.C },
  { value: values.D },
])
</script>
