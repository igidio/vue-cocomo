<template>
  <Drawer>
    <DrawerTrigger>
      <slot name="trigger" />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>{{ title }}</DrawerTitle>
        <DrawerDescription v-if="description">
          {{ description }}
        </DrawerDescription>
      </DrawerHeader>
      <div class="p-4 pb-0">
        <slot name="default" />
      </div>
      <DrawerFooter class="flex flex-row justify-end">
        <DrawerClose>
          <Button variant="outline"> Cancelar</Button>
        </DrawerClose>
        <Button>Agregar</Button>
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'

defineProps<{
  trigger: string
  title: string
  description?: string
}>()
</script>
