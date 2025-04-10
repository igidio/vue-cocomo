<template>
  <Card class="p-4">
    <div class="justify-between flex flex-row w-full items-center">
      <Button @click="step_index--" :disabled="step_index <= 1" variant="secondary">
        <SquareArrowLeft />
        <span class="hidden sm:block">Anterior</span>

      </Button>
      <div class="flex flex-col items-center gap-1">
        <span class="font-bold ">{{ steps[step_index-1].title}}</span>
        <div class="bg-black p-2 rounded-full flex flex-row w-fit">
          <component :is="steps[step_index-1].icon" class="text-white self-center"/>
        </div>
        <span class="text-sm">Paso {{step_index}}/5</span>
      </div>
      <Button @click="step_index++" :disabled="step_index >= 5" variant="secondary"
      >
        <span class="hidden sm:block">Siguiente</span>
        <SquareArrowRight />
      </Button>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { SquareArrowLeft, SquareArrowRight } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { steps } from '../../data/sample'

const { step_index } = storeToRefs(useProcessStore())

</script>
