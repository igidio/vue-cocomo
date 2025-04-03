<template>
  <RouterLink to="/create">
    <Button class="w-fit">Crear nueva estimación</Button>
  </RouterLink>
  <div v-if="items.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <ItemCard v-for="(item, index) in items" :key="index" :item="item" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import ItemCard from '@/components/ItemCard.vue'
import { Button } from '@/components/ui/button'

const items = ref([])

onMounted(async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/`)
    console.log('Response:', response.data)
    items.value = response.data
  } catch (error) {
    console.error('Error:', error)
  }
})
</script>
