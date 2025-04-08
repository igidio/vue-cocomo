<template>
  <div class="content-center  p-4 bg-white" v-if="project._id">
    <!-- Encabezado -->
    <div class="border-b pb-4 mb-6">
      <h1 class="text-xl font-bold text-gray-800">Detalles del Proyecto</h1>
      <p class="text-sm text-gray-500">ID: {{ project._id }}</p>
<!--      <p class="text-sm text-gray-500">Fecha: {{ formatDate(project.date) }}</p>-->
      <p class="text-sm text-gray-500">Fecha: {{ project.date }}</p>
    </div>

    <!-- Resumen -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <div class="border rounded p-4">
        <h2 class="text-sm font-medium text-gray-500">Puntos de Función</h2>
        <p class="text-xl font-bold">{{ project.a_ufp.result }}</p>
      </div>
      <div class="border rounded p-4">
        <h2 class="text-sm font-medium text-gray-500">Puntos Ajustados</h2>
        <p class="text-xl font-bold">{{ project.b_afp.result.toFixed(2) }}</p>
      </div>
      <div class="border rounded p-4">
        <h2 class="text-sm font-medium text-gray-500">Costo Total</h2>
        <p class="text-xl font-bold">${{ project.e_cost }}</p>
      </div>
    </div>

    <!-- Acordeón para secciones -->
    <div class="space-y-4">
      <!-- Sección 1: Puntos de Función -->
      <div class="border rounded overflow-hidden">
        <button
          @click="toggleSection('ufp')"
          class="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
        >
          <span class="font-medium">Puntos de Función (UFP)</span>
          <svg
            :class="openSection === 'ufp' ? 'transform rotate-180' : ''"
            class="w-5 h-5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="openSection === 'ufp'" class="p-4 border-t">
          <table class="min-w-full divide-y divide-gray-200">
            <thead>
            <tr>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Descripción</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Tipo</th>
              <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Peso</th>
            </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
            <tr v-for="(item, index) in project.a_ufp.items" :key="index" class="hover:bg-gray-50">
              <td class="px-4 py-2 text-sm">{{ item.value }}</td>
              <td class="px-4 py-2 text-sm">{{ item.type }}</td>
              <td class="px-4 py-2 text-sm">
                <span :class="getWeightClass(item.weight)">{{ item.weight }}</span>
              </td>
            </tr>
            </tbody>
          </table>
          <div class="mt-4 pt-4 border-t">
            <div class="text-sm font-medium">Resultados por Tipo:</div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2">
              <div v-for="(result, type) in project.a_ufp.results_by_type" :key="type" class="text-sm">
                {{ result.label }}: <span class="font-medium">{{ result.value }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 2: Factores de Ajuste -->
      <div class="border rounded overflow-hidden">
        <button
          @click="toggleSection('afp')"
          class="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
        >
          <span class="font-medium">Factores de Ajuste (AFP)</span>
          <svg
            :class="openSection === 'afp' ? 'transform rotate-180' : ''"
            class="w-5 h-5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="openSection === 'afp'" class="p-4 border-t">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div v-for="(item, index) in project.b_afp.items" :key="index" class="flex justify-between items-center text-sm p-2 hover:bg-gray-50">
              <span>{{ item.value }}</span>
              <span class="font-medium">{{ item.score }}</span>
            </div>
          </div>
          <div class="mt-4 pt-4 border-t">
            <div class="flex justify-between text-sm">
              <span>Suma de factores:</span>
              <span class="font-medium">{{ project.b_afp.sum }}</span>
            </div>
            <div class="flex justify-between text-sm mt-1">
              <span>Resultado:</span>
              <span class="font-medium">{{ project.b_afp.result.toFixed(2) }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 3: Información Técnica -->
      <div class="border rounded overflow-hidden">
        <button
          @click="toggleSection('tech')"
          class="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
        >
          <span class="font-medium">Información Técnica</span>
          <svg
            :class="openSection === 'tech' ? 'transform rotate-180' : ''"
            class="w-5 h-5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="openSection === 'tech'" class="p-4 border-t">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 class="text-sm font-medium mb-2">Líneas de Código</h3>
              <div class="space-y-1">
                <div class="flex justify-between text-sm">
                  <span>Lenguaje:</span>
                  <span>{{ project.c_ldc.selected_language }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Líneas de código:</span>
                  <span>{{ project.c_ldc.lines_of_code.toFixed(2) }}</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>KLOC:</span>
                  <span>{{ project.c_ldc.kilolines_of_code.toFixed(4) }}</span>
                </div>
              </div>
            </div>
            <div>
              <h3 class="text-sm font-medium mb-2">Modelo COCOMO</h3>
              <div class="space-y-1">
                <div class="flex justify-between text-sm">
                  <span>Esfuerzo:</span>
                  <span>{{ project.d_cocomo.effort_estimation }} personas-mes</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Tiempo:</span>
                  <span>{{ project.d_cocomo.time_estimation }} meses</span>
                </div>
                <div class="flex justify-between text-sm">
                  <span>Tamaño del equipo:</span>
                  <span>{{ project.d_cocomo.team_size_calculation }} personas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sección 4: Costos -->
      <div class="border rounded overflow-hidden">
        <button
          @click="toggleSection('cost')"
          class="w-full flex justify-between items-center p-4 text-left bg-gray-50 hover:bg-gray-100"
        >
          <span class="font-medium">Costos</span>
          <svg
            :class="openSection === 'cost' ? 'transform rotate-180' : ''"
            class="w-5 h-5 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div v-if="openSection === 'cost'" class="p-4 border-t">
          <div class="text-center mb-4">
            <div class="text-sm text-gray-500">Costo Total</div>
            <div class="text-2xl font-bold">${{ project.e_cost }}</div>
          </div>
          <div class="text-sm text-gray-500 text-center">
            Basado en {{ project.d_cocomo.effort_estimation }} personas-mes y
            {{ project.d_cocomo.time_estimation }} meses de desarrollo
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Item } from '@/data/interfaces'
import { useRoute } from 'vue-router'
import { onMounted, ref, type Ref } from 'vue'
import { useProcessStore } from '@/store/process.store.ts'
const project: Ref<Item> = ref({} as Item)
const { database } = useProcessStore()


onMounted(async () => {
  project.value = await database.read(useRoute().params.id as string)
})

const openSection = ref('');

// Funciones
const toggleSection = (section) => {
  if (openSection.value === section) {
    openSection.value = '';
  } else {
    openSection.value = section;
  }
};

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

const getWeightClass = (weight) => {
  switch (weight) {
    case 'Alto':
      return 'px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs';
    case 'Medio':
      return 'px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs';
    case 'Bajo':
      return 'px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs';
    default:
      return '';
  }
};
</script>
