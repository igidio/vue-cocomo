<template>
  <Drawer v-model:open="is_open">
    <DrawerTrigger>
      <slot name="trigger" />
    </DrawerTrigger>
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>{{ t("read.delete.title") }}</DrawerTitle>
        <DrawerDescription>{{ t("read.delete.description") }}</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter class="flex flex-row justify-end">
        <DrawerClose>
          <Button variant="outline">{{ t("ui.cancel") }}</Button>
        </DrawerClose>
        <Button @click="on_submit" variant="destructive" :disabled="is_loading">
          <Loader2 class="w-4 h-4 mr-2 animate-spin" v-if="is_loading" />
          {{ t("ui.delete") }}
        </Button>
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
import { Loader2 } from 'lucide-vue-next'
import { useRoute, useRouter } from 'vue-router'
import { toast } from 'vue-sonner'
import { inject, ref } from 'vue'
import { DatabaseService } from '@/data/classes'
import { useI18n } from 'vue-i18n'
const route = useRoute()
const router = useRouter()

const is_loading = ref(false)
const database = inject<DatabaseService>('database')!
const { t } = useI18n()
const on_submit = async () => {
  const id = route.params.id as string
  is_loading.value = true

  await database
    .delete(id)
    .then(async () => {
      await router.replace({
        name: 'home',
      })
      toast('Proyecto eliminado exitosamente', {
        description: `El proyecto con el identificador ${id} ha sido eliminado.`,
      })
    })
    .finally(() => {
      is_loading.value = false
    })
}

const is_open = defineModel({
  type: Boolean,
})
</script>
