<template>
  <div class="flex flex-col gap-4">
    <GlobalCard class="flex flex-row justify-center">
      <GlobalStepper v-model="step_index" />
      <div class="justify-between flex flex-row w-full">
        <Button @click="step_index--" :disabled="step_index <= 1" variant="secondary">
          <SquareArrowLeft />
          Anterior
        </Button>
        <Button @click="step_index++" :disabled="step_index >= 5" variant="secondary"
          >Siguiente
          <SquareArrowRight />
        </Button>
      </div>
    </GlobalCard>
    <div class="flex flex-row gap-4">
      <GlobalCard class="max-w-[300px] h-fit">
        <SidebarContent />
      </GlobalCard>

      <Card class="grow p-4" >
          <AStep v-if="step_index == 1" />
          <BStep v-if="step_index == 2" />
          <CStep v-if="step_index == 3" />
          <DStep v-if="step_index == 4" />
          <EStep v-if="step_index == 5" />
      </Card>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const step_index = ref(1)

import GlobalStepper from '@/components/GlobalStepper.vue'
import { Button } from '@/components/ui/button'

import AStep from '@/components/steps/AStep.vue'
import BStep from '@/components/steps/BStep.vue'
import CStep from '@/components/steps/CStep.vue'
import DStep from '@/components/steps/DStep.vue'
import EStep from '@/components/steps/EStep.vue'

import { SquareArrowRight, SquareArrowLeft } from 'lucide-vue-next'
import GlobalCard from '@/GlobalCard.vue'
import SidebarContent from '@/components/steps/SidebarContent.vue'
import { Card } from '@/components/ui/card'
</script>
