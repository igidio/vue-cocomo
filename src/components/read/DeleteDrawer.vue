<template>
  <Drawer v-model:open="is_open">
    <DrawerTrigger>
      <slot name="trigger" />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Eliminar proyecto</DrawerTitle>
        <DrawerDescription> ¿Seguro desea eliminar este proyecto?.</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter class="flex flex-row justify-end">
        <DrawerClose>
          <Button variant="outline"> Cancelar</Button>
        </DrawerClose>
        <Button @click="on_submit" variant="destructive">Eliminar</Button>
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
import { useProcessStore } from '@/store/process.store.ts'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const { database } = useProcessStore()

const on_submit = async () => {
  const id = route.params.id as string;
  await database.delete(id)
  await router.replace({
    name: 'home',
  })
}

const is_open = defineModel({
  type: Boolean
})
</script>
