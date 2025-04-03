<template>
  <GlobalCard
    :title="new Date(item.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' }) + ' ' + new Date(item.date).toLocaleTimeString('es-ES')"
  >
    <div>
      <div>Elementos del PFSA: <span class="font-semibold">{{ item.a_ufp.items.length }}</span></div>
      <div>Elementos del PFA: <span class="font-semibold">{{ item.b_afp.items.length }}</span></div>
      <div>Costo de desarrollo: <span class="font-semibold">{{ item.e_cost }}</span></div>
    </div>
  </GlobalCard>
</template>
<script setup lang="ts">
import GlobalCard from '@/GlobalCard.vue'
import type { Item } from '@/data/interfaces'

defineProps<{ item: Item }>()
</script>
