<template>
  <MainStep/>
</template>
<script setup lang="ts">
import MainStep from '@/components/steps/MainStep.vue'
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
const { step_index, mode , id, a_step, b_step} = storeToRefs(useProcessStore())

onMounted(() => {
  mode.value = 'create'
  id.value = undefined
  step_index.value = 1;
  a_step.value = []
  b_step.value = []
})
</script>
