<template>
  <LoaderCircle class="animate-spin self-center m-8" v-if="is_loading" />
  <MainStep v-else />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { useRoute } from 'vue-router'
import type { AUfpItem, BAFPItem, c_step_interfaace, Item } from '@/data/interfaces'
import MainStep from '@/components/steps/MainStep.vue'
import { LoaderCircle } from 'lucide-vue-next'
import { languages_data, software_data } from '@/data/sample'
const { a_step, b_step, name, step_index, mode, id, c_step, d_step } =
  storeToRefs(useProcessStore())
const { database } = useProcessStore()
const is_loading = ref(true)

onMounted(async () => {
  mode.value = 'edit'
  id.value = useRoute().params.id as string
  step_index.value = 1
  await database
    .read(id.value)
    .then((response: Item) => {
      name.value = response.name
      a_step.value = response.a_ufp.items as AUfpItem[]
      b_step.value = response.b_afp.items as BAFPItem[]
      c_step.value =
        languages_data.find((data) => data.label == response.c_ldc.selected_language) ||
        ({} as c_step_interfaace)
      d_step.value = software_data[response.d_cocomo.selected_model as keyof typeof software_data]    })
    .finally(() => (is_loading.value = false))
})
</script>
