<template>
  <div class="flex flex-row justify-center">
    <GlobalStepper v-model="step_index" />
  </div>
  <div class="justify-between flex flex-row w-full">
    <Button @click="step_index--" :disabled="step_index <= 1">Anterior</Button>
    <Button @click="step_index++" :disabled="step_index >= 5">Siguiente</Button>
  </div>
  <hr />
  <AStep v-if="step_index == 1" />
  <BStep v-if="step_index == 2" />
  <CStep v-if="step_index == 3" />
  <DStep v-if="step_index == 4" />
  <EStep v-if="step_index == 5" />
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
</script>
