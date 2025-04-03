<template>
  <span class="font-bold text-3xl mb-3">Conversión de PF a LDC</span>
  <div class="flex flex-row gap-6 w-full">
    <div class="w-1/2">
      <GlobalTable :headers="columns" :data="mapData"></GlobalTable>
    </div>

    <div class="flex flex-col grow gap-2">
      <span>Selecciona el lenguaje de programación</span>
      <GlobalSelect
        placeholder="Seleccione el lenguaje de programación"
        :options="
          languages_data.map((language) => ({
            label: language.label,
            value: language.code_lines,
          }))
        "
        v-model:selected_value="c_step"
      />
      <div class="text-end flex flex-col">
        <div>
          Líneas de código del lenguaje seleccionado:
          <span class="font-bold">{{ c_step }}</span>
        </div>
        <div>
          Líneas de código: <span class="font-bold">{{ lines_of_code.toFixed(2) }}</span>
        </div>
        <div>
          Kilo líneas de código: <span class="font-bold">{{ kilolines_of_code.toFixed(2) }}</span>
        </div>
      </div>
    </div>
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
