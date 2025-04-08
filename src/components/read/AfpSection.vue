<template>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div
          v-for="(item, index) in project.b_afp.items"
          :key="index"
          class="flex justify-between items-center text-sm p-2 hover:bg-gray-50"
        >
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
</template>
<script setup lang="ts">
import type { Item } from '@/data/interfaces'
defineProps<{ project: Item }>()

</script>
