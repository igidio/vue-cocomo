<template>
    <div class="text-center">
      <div class="text-sm text-gray-500">Costo Total</div>
      <div class="text-2xl font-bold">${{ project.e_cost }}</div>
    </div>
    <div class="text-sm text-gray-500 text-center">
      Basado en {{ project.d_cocomo.effort_estimation }} persona(s)/mes y
      {{ project.d_cocomo.time_estimation }} {{ project.d_cocomo.time_estimation > 1 ? 'meses' : 'mes' }} de desarrollo
    </div>
</template>
<script setup lang="ts">
import type { Item } from '@/data/interfaces'

defineProps<{ project: Item }>()
</script>
