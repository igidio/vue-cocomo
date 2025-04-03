<template>
  <GlobalDrawer trigger="Agregar" title="Agregar elemento">
    <template v-slot:trigger>
      <Button class="self-center w-32">Agregar</Button>
    </template>

    <template v-slot:default>

    </template>
  </GlobalDrawer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import GlobalDrawer from '@/components/GlobalDrawer.vue'

defineProps<{
  title: string
  description?: string
}>()
</script>
