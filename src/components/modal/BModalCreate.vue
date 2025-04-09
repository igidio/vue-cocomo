<template>
  <GlobalDrawer trigger="Agregar" title="Agregar elemento" v-model="is_open">
    <template v-slot:trigger>
      <Button class="self-center w-32">Agregar</Button>
    </template>

    <template v-slot:default>
      <form class="space-y-6" @submit="onSubmit">
        <div class="flex flex-row gap-4 w-full">
          <div class="flex flex-col w-1/2 gap-4">
            <Label>Característica</Label>
            <Input type="text" class="w-full" v-model="form.value" />
          </div>
          <div class="flex flex-col grow gap-4">
            <Label>Puntuación</Label>
            <Input type="number" class="w-full" v-model="form.score" min="0" max="5" />
            <span class="text-sm">La puntuación debe estar entre 0 y 5.</span>
          </div>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <DrawerClose>
        <Button variant="outline"> Cancelar</Button>
      </DrawerClose>
      <Button :disabled="submit_is_disabled" @click="onSubmit">Agregar </Button>
    </template>
  </GlobalDrawer>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
import GlobalDrawer from '@/components/GlobalDrawer.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const { b_step } = storeToRefs(useProcessStore())

const form = reactive({
  value: '',
  score: 0 as number,
})

defineProps<{
  label: string
  description?: string
}>()

import { computed, reactive, ref } from 'vue'
import { DrawerClose } from '@/components/ui/drawer'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'

const submit_is_disabled = computed(() => {
  return !form.value || typeof form.score === typeof 'number' || form.score < 0 || form.score > 5
})

const is_open = ref(false)

const onSubmit = () => {
  b_step.value.push({
    value: form.value,
    score: form.score,
  })
  form.value = ''
  form.score = 0
  is_open.value = false
}
</script>
