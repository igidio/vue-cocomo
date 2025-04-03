<template>
  <Drawer v-model:open="is_open">
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
        <slot name="footer" />
      </DrawerFooter>
    </DrawerContent>
  </Drawer>
</template>

<script setup lang="ts">
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'

defineProps<{
  trigger: string
  title: string
  description?: string
}>()

const is_open = defineModel({
  type: Boolean
})
</script>
