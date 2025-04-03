<template>
  <Stepper
    v-model="step_index"
  >
    <StepperItem
      v-for="item in steps"
      :key="item.step"
      class="basis-1/4"
      :step="item.step"
    >
      <StepperTrigger>
        <StepperIndicator>
          <component :is="item.icon" class="w-4 h-4" />
        </StepperIndicator>
        <div class="flex flex-col">
          <StepperTitle>
            {{ item.title }}
          </StepperTitle>
          <StepperDescription>
            {{ item.description }}
          </StepperDescription>
        </div>
      </StepperTrigger>
      <StepperSeparator
        v-if="item.step !== steps[steps.length - 1].step"
        class="w-full h-px"
      />
    </StepperItem>
  </Stepper>
</template>

<script setup lang="ts">
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'

import {Layers, Layers2, ChartNoAxesGantt, Calculator, DollarSign } from 'lucide-vue-next'

const step_index = defineModel()
const steps = [{
  step: 1,
  title: 'Calculo de PFSA',
  description: 'Cálculo de puntos de función sin ajustar',
  icon: Layers,
}, {
  step: 2,
  title: 'Cálculo de PFA',
  description: 'Puntos de función ajustados',
  icon: Layers2,
}, {
  step: 3,
  title: 'Conversión de PF a LDC',
  description: 'Conversión de puntos de función ajustados a líneas de código',
  icon: ChartNoAxesGantt,
}, {
  step: 4,
  title: 'Aplicación de COCOMO',
  description: 'Aplicación del COCOMO',
  icon: Calculator,
}, {
  step: 5,
  title: 'Costo de desarrollo',
  description: 'Resultados del cálculo',
  icon: DollarSign,
}]
</script>
