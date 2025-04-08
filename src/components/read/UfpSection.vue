<template>
    <table class="min-w-full divide-y divide-gray-200">
      <thead>
      <tr>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          Descripción
        </th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          Tipo
        </th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          Peso
        </th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr
        v-for="(item, index) in project.a_ufp.items"
        :key="index"
        class="hover:bg-gray-50"
      >
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
        <div
          v-for="(result, type) in project.a_ufp.results_by_type"
          :key="type"
          class="text-sm"
        >
          {{ result!.label }}: <span class="font-medium">{{ result!.value }}</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { type Item, Weight } from '@/data/interfaces'

defineProps<{ project: Item }>()

const getWeightClass = (weight: Weight) => {
  switch (weight) {
    case 'Alto':
      return 'px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs'
    case 'Medio':
      return 'px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs'
    case 'Bajo':
      return 'px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs'
    default:
      return ''
  }
}
</script>
