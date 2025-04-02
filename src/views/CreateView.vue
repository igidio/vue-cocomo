<template>
  <GlobalStepper/>
  <hr/>
  <span class="font-bold text-3xl">Cálculo de PFSA</span>
  <AStep></AStep>

  <div class="justify-between flex flex-row w-full bg-red-50">
    <Button>Anterior</Button>
    <Button>Siguiente</Button>
  </div>
</template>
<script setup lang="ts">
import GlobalStepper from '@/components/GlobalStepper.vue'
import AStep from '@/components/steps/AStep.vue'
import { Button } from '@/components/ui/button'
</script>
