<template>
  <Stepper
    v-model="step_index"
    class="flex w-full items-start gap-2 mb-6"
    orientation="horizontal"
  >
    <StepperItem
      v-for="(item) in steps"
      :key="item.step"
      :step="item.step"
      class="relative flex w-full flex-col items-center justify-center"
    >
      <StepperSeparator
        v-if="item.step !== steps[steps.length - 1].step"
        class="absolute left-[calc(50%+20px)] right-[calc(-50%+10px)] top-5 block h-0.5 shrink-0 rounded-full bg-muted group-data-[state=completed]:bg-primary"
      />
      <StepperTrigger>
        <StepperIndicator>
          <component :is="item.icon" class="w-4 h-4" />
        </StepperIndicator>
        <div class="flex flex-col">
          <StepperTitle class="text-sm tablet:w-24 desktop:w-full">
            <p class="tablet:text-wrap desktop:text-nowrap">{{ item.title }}</p>
          </StepperTitle>
        </div>
      </StepperTrigger>
    </StepperItem>
  </Stepper>
</template>

<script setup lang="ts">
import { Stepper, StepperDescription, StepperIndicator, StepperItem, StepperSeparator, StepperTitle, StepperTrigger } from '@/components/ui/stepper'
import { steps } from '@/data/sample'
const step_index = defineModel({
  type: Number
})
</script>
