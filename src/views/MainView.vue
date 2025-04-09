<template>
  <RouterLink to="/create">
    <Button class="w-fit">Crear nueva estimación</Button>
  </RouterLink>
  <div v-if="items.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <ItemCard v-for="(item, index) in items" :key="index" :item="item" />
  </div>
  <div v-else><span class="italic">No hay ninguna estimación creada todavía, prueba <RouterLink to="create" class="font-semibold">creando una</RouterLink>.</span></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ItemCard from '@/components/ItemCard.vue'
import { Button } from '@/components/ui/button'
import { useProcessStore } from '@/store/process.store.ts'

const { database } = useProcessStore()

const items = ref([])

onMounted(async () => {

  const response = await database.readAll();
  items.value = response
  // try {
  //   const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/`)
  //   console.log('Response:', response.data)
  //   items.value = response.data
  // } catch (error) {
  //   console.error('Error:', error)
  // }
})
</script>
