<template>
  <GlobalStepper/>
  <hr/>
  <span class="font-bold text-3xl">Cálculo de PFA</span>
<!--  <AStep/>-->
  <BStep/>

  <div class="justify-between flex flex-row w-full bg-red-50">
    <Button>Anterior</Button>
    <Button>Siguiente</Button>
  </div>
</template>
<script setup lang="ts">
import GlobalStepper from '@/components/GlobalStepper.vue'
import AStep from '@/components/steps/AStep.vue'
import { Button } from '@/components/ui/button'
import BStep from '@/components/steps/BStep.vue'
</script>
