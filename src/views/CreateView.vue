<template>
  <GlobalStepper/>
  <hr/>
  <span class="font-bold text-3xl">Cálculo de PFA</span>
<!--  <AStep/>-->
<!--  <BStep/>-->
  <CStep/>

  <div class="justify-between flex flex-row w-full bg-red-50">
    <Button>Anterior</Button>
    <Button>Siguiente</Button>
  </div>
</template>
<script setup lang="ts">
import GlobalStepper from '@/components/GlobalStepper.vue'
import { Button } from '@/components/ui/button'

import AStep from '@/components/steps/AStep.vue'
import BStep from '@/components/steps/BStep.vue'
import CStep from '@/components/steps/CStep.vue'
</script>
