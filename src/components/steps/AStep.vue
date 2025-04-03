<template>
  <span class="font-bold text-3xl mb-3">Cálculo de PFSA</span>
  <AModalModify
    title="Modificar elemento"
    v-model="is_open"
    :id="selected"
  />
  <GlobalTable
    :headers="columns"
    :data="mapData"
    :on_click="open_modal"
  />
  <AModalCreate title="Crear elemento"/>

  <div class="flex flex-row w-full gap-2">
    <GlobalAccordion trigger="Descripción" class="w-1/2">
      <article class="prose">
        <p>
          Los PFSA se calculan identificando las funciones del sistema, como entradas, salidas,
          consultas, archivos internos y archivos externos.
        </p>
        <p>
          Asigna un pesa a cada función según su complejidad (baja, media, alta) y suma los valores
          para obtener el PFSA, donde:
        </p>
        <ul>
          <li>
            <b>Entradas externas (EI):</b> Datos que ingresan al sistema desde el usuario o sistemas
            externos.
          </li>
          <li>
            <b>Salidas externas (EO):</b> Información que el sistema genera y envía al usuario o
            sistemas externos.
          </li>
          <li>
            <b>Consultas externas (EQ):</b> Interacciones que permiten al usuario obtener
            información específica.
          </li>
          <li>
            <b>Ficheros lógicos internos (ILF):</b> Bases de datos o archivos gestionados por el
            sistema.
          </li>
          <li>
            <b>Ficheros lógicos externos (ELF):</b> Bases de datos o archivos gestionados por
            sistemas externos pero utilizados por el sistema.
          </li>
        </ul>
        <p>
          Es importante asignar complejidad, según los criterios como el número de campos o el nivel
          de interacción. De acuerdo ala complejidad es que se asigna un peso para cada función del
          sistema.
        </p>
      </article>
    </GlobalAccordion>

    <div
      class="text-end flex flex-col bg-gray-50 p-2 rounded-md w-1/2 self-end border border-gray-300 gap-1 self-start"
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

<script setup lang="ts">
import { WeightEnum } from '@/data/enums/weight.enum.ts'
import GlobalTable from '@/components/GlobalTable.vue'
import { computed, type ComputedRef, ref } from 'vue'
import { getComplexity } from '@/data/objects/get_complexity.ts'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'
import GlobalAccordion from '@/components/GlobalAccordion.vue'
import AModalCreate from '@/components/modal/AModalCreate.vue'
import AModalModify from '@/components/modal/AModalModify.vue'

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
