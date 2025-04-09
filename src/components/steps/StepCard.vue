<template>
  <Card class="grow p-4 transition-all">
    <div class="flex flex-col justify-between gap-2 mb-4 h-full">
      <div>
        <div class="flex flex-row justify-between items-center">
          <span class="font-bold text-3xl">{{ title }}</span>
          <GlobalDrawer label="Descripción">
            <template #trigger>
              <Button variant="outline">
                <Info />
              </Button>
            </template>
            <article class="prose prose-slate max-w-none">
              {{ content }}
            </article>
            <template #footer>
              <DrawerClose>
                <Button variant="outline">Cerrar</Button>
              </DrawerClose>
            </template>
          </GlobalDrawer>
        </div>
        <hr class="my-2" />
        <slot name="top" />
      </div>
    <slot name="bottom" />
    </div>
  </Card>
</template>
<script setup lang="ts">
import { Card } from '@/components/ui/card'
import { DrawerClose } from '@/components/ui/drawer'
import { Info } from 'lucide-vue-next'
import { Button } from '@/components/ui/button'
import GlobalDrawer from '@/components/GlobalDrawer.vue'

defineProps<{
  title: string,
  content: string
}>()
</script>
