<template>
  <StepCard :title="steps[4].title" :content="steps[3].content">
    <template #top>
      <div class="flex flex-col justify-items-center content-center gap-4 justify-center text-center">
        <div
          class="flex flex-row justify-center bg-gray-50 p-4 rounded-lg gap-6 border border-gray-200 w-full self-center"
        >
          <span class="text-2xl font-black">{{ e_step }} USD</span>
        </div>
      <Button @click="create">Guardar en la base de datos</Button>
      </div>

    </template>
  </StepCard>

</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { steps } from '@/data/sample'
import StepCard from '@/components/steps/StepCard.vue'
import { Button } from '@/components/ui/button'


const { e_step, final_object } = storeToRefs(useProcessStore())
const { database } = useProcessStore()

const create = async () => {
  database.create(final_object.value)
}
</script>
