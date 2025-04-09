<template>
  <LoaderCircle class="animate-spin self-center m-8" v-if="is_loading" />
  <div class="flex-col flex gap-4" v-else>
    <RouterLink to="/create">
      <Button class="w-fit">Crear nueva estimación</Button>
    </RouterLink>
    <div v-if="items.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <ItemCard v-for="(item, index) in items" :key="index" :item="item" />
    </div>
    <div v-else>
      <span class="italic"
        >No hay ninguna estimación creada todavía, prueba
        <RouterLink to="create" class="font-semibold">creando una</RouterLink>.</span
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import { Button } from '@/components/ui/button'
import { useProcessStore } from '@/store/process.store.ts'
import type { Item } from '@/data/interfaces'
import { LoaderCircle } from 'lucide-vue-next'

const { database } = useProcessStore()
const items = ref<Item[]>([])
const is_loading = ref(true)

onMounted(async () => {
    is_loading.value = true;
    items.value = (items.value = await database.readAll().finally(async () => (is_loading.value = false)))
  }
)
</script>
