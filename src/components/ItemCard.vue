<template>
  <RouterLink :to="{name: 'read', params: { id: item._id }}">

    <div class="flex flex-col border border-gray-300 p-4 rounded-lg shadow-xs hover:bg-gray-50 transition-all">
      <div>
        <div class="font-bold">
          {{ item.name }}
        </div>
        <div>
          Elementos del PFSA: <span class="font-semibold">{{ item.a_ufp.items.length }}</span>
        </div>
        <div>
          Elementos del PFA: <span class="font-semibold">{{ item.b_afp.items.length }}</span>
        </div>
        <div>
          Costo de desarrollo: <span class="font-semibold">{{ item.e_cost }}</span>
        </div>
        <span class="text-xs mt-6 inline-block">{{ item._id }}</span>
      </div>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import GlobalCard from '@/GlobalCard.vue'
import type { Item } from '@/data/interfaces'

defineProps<{ item: Item }>()
</script>
