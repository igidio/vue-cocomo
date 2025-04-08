<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h3 class="text-sm font-medium mb-2">Líneas de Código</h3>
      <div class="space-y-1">
        <div class="flex justify-between text-sm">
          <span>Lenguaje:</span>
          <span class="font-semibold">{{ project.c_ldc.selected_language }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Líneas de código:</span>
          <span class="font-semibold">{{ project.c_ldc.lines_of_code.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>KLOC:</span>
          <span class="font-semibold">{{ project.c_ldc.kilolines_of_code.toFixed(4) }}</span>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-sm font-medium mb-2">Modelo COCOMO</h3>
      <div class="space-y-1">
        <div class="flex justify-between text-sm">
          <span>Esfuerzo:</span>
          <span class="font-semibold">{{ project.d_cocomo.effort_estimation }} persona(s)/mes</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Tiempo:</span>
          <span class="font-semibold">{{ project.d_cocomo.time_estimation }} {{ (project.d_cocomo.time_estimation > 1) ? 'meses' : 'mes' }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>Tamaño del equipo:</span>
          <span class="font-semibold">{{ project.d_cocomo.team_size_calculation }} {{ ( +project.d_cocomo.team_size_calculation > 1) ? 'personas' : 'persona' }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Item } from '@/data/interfaces'

defineProps<{ project: Item }>()
</script>
