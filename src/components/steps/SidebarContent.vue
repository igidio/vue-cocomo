<template>
  <div class="flex flex-col text-sm">
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar
        :label="steps[0].title"
        :icon="steps[0].icon"
        :step="steps[0].step"
        @click="every_click = false"
      />
      <div>
        Funciones insertadas:
        <span class="font-semibold">{{ final_object.a_ufp.items.length }}</span>
      </div>
      <div>
        Resultado: <span class="font-semibold">{{ final_object.a_ufp.result <= 0 ? 'N/D' : final_object.a_ufp.result }} </span>
      </div>
      <hr />
    </div>
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar
        :label="steps[1].title"
        :icon="steps[1].icon"
        :step="steps[1].step"
        @click="every_click = false"
      />
      <div>
        Funciones insertadas:
        <span class="font-semibold">{{ final_object.b_afp.items.length }}</span>
      </div>
      <div>
        Suma total: <span class="font-semibold">{{ final_object.b_afp.sum }}</span>
      </div>
      <div>
        Resultado: <span class="font-semibold">{{ final_object.b_afp.result.toFixed(2) }}</span>
      </div>
      <hr />
    </div>
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar :label="steps[2].title" :icon="steps[2].icon" :step="steps[2].step" @click="every_click = false" />
      <div>
        Lenguaje:
        <span class="font-semibold">{{ final_object.c_ldc.selected_language || 'Ninguno' }}</span>
      </div>
      <div>
        Líneas de código:
        <span class="font-semibold">{{ +final_object.c_ldc.lines_of_code.toFixed(1) || 'N/D' }}</span>
      </div>
      <hr />
    </div>
    <div class="mb-3 flex flex-col gap-2">
      <SubtitleSidebar :label="steps[3].title" :icon="steps[3].icon" :step="steps[3].step" @click="every_click = false" />
      <div>
        Modelo:
        <span class="font-semibold">{{ final_object.d_cocomo.selected_model }}</span>
      </div>
      <div>
        Esfuerzo:
        <span class="font-semibold">{{ +final_object.d_cocomo.effort_estimation || 'N/D' }}</span>
      </div>
      <div>
        Tiempo: <span class="font-semibold">{{ +final_object.d_cocomo.time_estimation || 'N/D' }}</span>
      </div>
      <div>
        Nro. de personas: <span class="font-semibold">{{ +final_object.d_cocomo.team_size_calculation || 'N/D' }}</span>
      </div>
      <hr />
    </div>
    <div>
      <SubtitleSidebar :label="steps[4].title" :icon="steps[4].icon" :step="steps[4].step" @click="every_click = false" />
      <div>
        Valor de estimación: <span class="font-semibold">{{ +final_object.e_cost ? `${final_object.e_cost}$` : 'N/D' }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'
import SubtitleSidebar from '@/components/steps/SubtitleSidebar.vue'
import { steps } from '@/data/sample'

const { final_object } = storeToRefs(useProcessStore())
const every_click = defineModel('every_click', { type: Boolean, required: false })
</script>
