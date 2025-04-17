<template>
  <MainStep />
</template>
<script setup lang="ts">
import MainStep from '@/components/steps/MainStep.vue'
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { useI18n } from 'vue-i18n'
import b_stepData from '@/data/sample/b_step.data.ts'

const { step_index, mode, id, a_step, b_step, name } = storeToRefs(useProcessStore())
const { locale, t } = useI18n()

onMounted(() => {
  mode.value = 'create'
  id.value = undefined
  step_index.value = 1
  a_step.value = []
  b_step.value = locale.value === 'en' ? b_stepData.en : b_stepData.es
  name.value = locale.value === 'en' ? 'Project name' : 'Nombre del proyecto'
})

document.title = t('create.title')
</script>
