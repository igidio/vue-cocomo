<template>
  <RouterLink :to="{name: 'read', params: { id: item._id }}">

    <div class="flex flex-col border border-gray-300 p-4 rounded-lg shadow-xs hover:bg-gray-50 transition-all">
      <div>
        <div class="font-bold">
          {{ item.name }}
        </div>
        <div>
          {{ t('main.item.ufp') }}: <span class="font-semibold">{{ item.a_ufp.items.length }}</span>
        </div>
        <div>
          {{ t('main.item.afp') }}: <span class="font-semibold">{{ item.b_afp.items.length }}</span>
        </div>
        <div>
          {{ t('main.item.cost') }}: <span class="font-semibold">{{ item.e_cost }}</span>
        </div>
        <span class="text-xs mt-6 inline-block">{{ item._id }}</span>
      </div>
    </div>
  </RouterLink>
</template>
<script setup lang="ts">
import type { Item } from '@/data/interfaces'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineProps<{ item: Item }>()
</script>
