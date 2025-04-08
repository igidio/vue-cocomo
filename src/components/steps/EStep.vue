<template>
  <span class="font-bold text-3xl mb-3">Costo de desarrollo</span>
  <div class="flex flex-col">
    <div
      class="flex flex-row justify-center bg-gray-50 p-4 rounded-lg gap-6 border border-gray-200 w-fit"
    >
      <span class="text-2xl font-black">{{ e_step }} USD</span>
    </div>
    <Button @click="create">Guardar en la base de datos</Button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import axios from 'axios'
import { unref } from 'vue'
import type { Item } from '@/data/interfaces'

const { e_step, final_object } = storeToRefs(useProcessStore())
const { database } = useProcessStore()

const create = async () => {
  // console.log(final_object.value)
  // try {
  //   console.log(unref(final_object.value))
  //   const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/`, {
  //     ...unref(final_object.value)
  //   })
  //   console.log('Response:', response.data)
  // } catch (error) {
  //   console.error('Error:', error)
  // }
  database.create(final_object.value)
}
</script>
