<template>
  <Card class="p-4">
    <div class="justify-between flex flex-row w-full items-center">
      <Button @click="step_index--" :disabled="step_index <= 1" variant="secondary">
        <SquareArrowLeft />
      </Button>
      <div class="flex flex-col items-center gap-1">
        <span class="font-bold ">{{ t(`steps.${step_index}.title`) }}</span>
        <div class="bg-black p-2 rounded-full flex flex-row w-fit">
          <component :is="steps[step_index-1].icon" class="text-white self-center"/>
        </div>
        <span class="text-sm">{{ t(`ui.step`) }} {{step_index}}/5</span>
      </div>
      <Button @click="step_index++" :disabled="step_index >= 5" variant="secondary"
      >
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
import { useI18n } from 'vue-i18n'

const { step_index } = storeToRefs(useProcessStore())
const { t } = useI18n()
</script>
