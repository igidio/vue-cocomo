<template>
  <MainStep/>
</template>

<script setup lang="ts">
import { onMounted, type Ref, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { useRoute } from 'vue-router'
import axios, { type AxiosResponse } from 'axios'
import type { Item } from '@/data/interfaces'
import MainStep from '@/components/steps/MainStep.vue'
const { a_step, b_step } = storeToRefs(useProcessStore())
const result:Ref<Item> = ref({} as Item)

onMounted(async() => {
  try {
    const response:AxiosResponse<Item> = await axios.get<Item>(`${import.meta.env.VITE_SERVER_URL}/${useRoute().params.id}`)
    console.log('Response:', response.data)
    result.value = response.data
  } catch (error) {
    console.error('Error:', error)
  }
  a_step.value = result.value.a_ufp.items as any
  b_step.value = result.value.b_afp.items as any
})
</script>
