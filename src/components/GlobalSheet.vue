<template>
  <Sheet v-model:open="is_open" class="transition-all">
    <SheetContent side="left">
      <SheetHeader>
        <SheetTitle v-if="title">{{ title }}</SheetTitle>
        <SheetDescription v-if="description">
          {{ description }}
        </SheetDescription>
      </SheetHeader>
      <div class="p-4">
        <slot />
      </div>
    </SheetContent>
  </Sheet>
</template>

<script setup lang="ts">
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'

const is_open = defineModel({ type: Boolean })
defineProps<{
  title?: string
  description?: string
}>()
</script>
