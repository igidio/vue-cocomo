<template>
  <div class="flex flex-row gap-2 items-center hover:bg-gray-200 p-2 rounded-md cursor-pointer" @click="step_index = step">
    <div class="flex flex-col bg-black rounded-full p-2">
      <component :is="icon" class="w-3 h-3" color="white" />
    </div>
    <span class="font-bold">{{ label }}</span>
  </div>
</template>
<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'

defineProps<{
  icon: string|object|(() => void),
  label: string,
  step: number
}>()
const { step_index } = storeToRefs(useProcessStore())
</script>
