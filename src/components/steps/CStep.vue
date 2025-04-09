<template>
  <StepCard :title="steps[2].title" :content="steps[2].content">
    <template #top>
      <div class="flex flex-col gap-2 mb-4">
        <div class="w-full flex flex-row h-32 gap-2">
          <div class="flex flex-col w-1/2">
            <span>Selecciona el lenguaje de programación</span>
            <GlobalSelect
              placeholder="Seleccione el lenguaje de programación"
              :options="
                languages_data.map((language) => ({
                  label: language.label,
                  value: language,
                }))
              "
              v-model:selected_value="c_step"
            />
          </div>

          <div class="text-end flex flex-col w-1/2">
            <IconItem
              v-if="final_object.a_ufp.items.length == 0 || final_object.a_ufp.items.length == 0"
              label="Debes introducir las funciones (PFA/PFSA) para obtener un resultado."
              :icon="CircleAlert"
            />
            <div v-if="c_step.code_lines && lines_of_code !== 0">
              <div>
                Líneas de código del lenguaje seleccionado:
                <span class="font-bold">{{ c_step.code_lines }} LDC [{{ c_step.label }}]</span>
              </div>
              <div>
                Líneas de código: <span class="font-bold">{{ lines_of_code.toFixed(2) }}</span>
              </div>
              <div>
                Kilo líneas de código:
                <span class="font-bold">{{ kilolines_of_code.toFixed(2) }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="">
          <GlobalTable :headers="columns" :data="mapData"></GlobalTable>
        </div>
      </div>
    </template>
  </StepCard>
</template>

<script setup lang="ts">
import GlobalTable from '@/components/GlobalTable.vue'
import GlobalSelect from '@/components/GlobalSelect.vue'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { computed, type ComputedRef } from 'vue'
import { languages_data, steps } from '@/data/sample'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import StepCard from '@/components/steps/StepCard.vue'
import { CircleAlert } from 'lucide-vue-next'
import IconItem from '@/components/steps/IconItem.vue'

//const { lines_of_code } = useProcessStore()
const { c_step, lines_of_code, kilolines_of_code, final_object } = storeToRefs(useProcessStore())

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
