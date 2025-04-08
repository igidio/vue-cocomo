<template>
  <div class="content-center p-4 bg-white" v-if="project._id">
    <!-- Encabezado -->
    <div class="flex flex-row justify-between border-b pb-4 mb-6">
      <div class="">
        <h1 class="text-xl font-bold text-gray-800">Detalles del Proyecto</h1>
        <p class="text-sm text-gray-500">ID: {{ project._id }}</p>
        <p class="text-sm text-gray-500">Fecha: {{ formatDate(project.date.toString()) }}</p>
      </div>
      <div class="flex flex-col gap-2">
        <RouterLink :to="{
          name: 'edit',
          params: {
            id: project._id,
          },
        }"><Button size="sm" variant="outline"><Pen/> Modificar</Button></RouterLink>


        <Button size="sm" variant="outline"><Trash2/> Eliminar</Button>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card v-for ="(resume, index) in [{
        label: 'Puntos de Función',
        value: project.a_ufp.result,
      }, {
        label: 'Puntos Ajustados',
        value: project.b_afp.result.toFixed(2),
      }, {
        label: 'Costo Total',
        value: project.e_cost,
      }]" :key="index"
        class="flex flex-col gap-0 px-4"
      >
          <h2 class="text-sm font-medium text-gray-500">{{ resume.label }}</h2>
          <p class="text-xl font-bold">{{ resume.value }}</p>
      </Card>
    </div>

    <GlobalTabs
      :list="[
        { value: 'ufp', label: 'Puntos de Función (UFP)' },
        { value: 'afp', label: 'Factores de ajuste (AFP)' },
        { value: 'info', label: 'Información técnica' },
        { value: 'costs', label: 'Costos' },
      ]"
    >
      <template #ufp>
        <UfpSection :project="project"></UfpSection>
      </template>
      <template #afp>
        <AfpSection :project="project"></AfpSection>
      </template>
      <template #info>
        <InfoSection :project="project"></InfoSection>
      </template>
      <template #costs>
        <CostsSection :project="project"></CostsSection>
      </template>
    </GlobalTabs>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '@/data/interfaces'
import { useRoute } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
import { useProcessStore } from '@/store/process.store.ts'
import { Button } from '@/components/ui/button'
import GlobalTabs from '@/components/GlobalTabs.vue'
import UfpSection from '@/components/read/UfpSection.vue'
import AfpSection from '@/components/read/AfpSection.vue'
import InfoSection from '@/components/read/InfoSection.vue'
import CostsSection from '@/components/read/CostsSection.vue'
import { Trash2, Pen } from 'lucide-vue-next'


const project: Ref<Item> = ref({} as Item)
const { database } = useProcessStore()
import { Card } from '@/components/ui/card'
import { formatDate } from '../data/helpers'


onMounted(async () => {
  project.value = await database.read(useRoute().params.id as string)
})

const openSection = ref('')

// Funciones
const toggleSection = (section) => {
  if (openSection.value === section) {
    openSection.value = ''
  } else {
    openSection.value = section
  }
}

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat('es-ES', {
//     day: '2-digit',
//     month: '2-digit',
//     year: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit'
//   }).format(date);
// };
</script>
