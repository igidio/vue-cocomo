<template>
  <GlobalDrawer trigger="Agregar" title="Agregar elemento" v-model="is_open">
    <template v-slot:trigger>
      <Button class="self-center w-32">Agregar</Button>
    </template>

    <template v-slot:default>
      <form class="space-y-6" @submit="onSubmit">
        <div class="flex flex-row gap-4 w-full">
          <div class="flex flex-col w-1/2 gap-4">
            <Label>Nombre</Label>
            <Input type="text" class="w-full" v-model="form.value" />

            <Label>Tipo</Label>
            <GlobalSelect
              placeholder="Seleccione el tipo"
              :options="
                Object.entries(ufpEnum).map(([key, value]) => ({
                  label: value,
                  value: value,
                }))
              "
              v-model:selected_value="form.type"
            />
          </div>
          <div class="flex flex-col grow">
            <Label class="mb-4">Complejidad</Label>
            <RadioGroup
              :default-value="WeightEnum.LOW"
              :orientation="'horizontal'"
              v-model="form.weight"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-one" :value="WeightEnum.LOW" />
                <Label for="option-one">Bajo</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-two" :value="WeightEnum.MEDIUM" />
                <Label for="option-two">Medio</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-three" :value="WeightEnum.HIGH" />
                <Label for="option-three">Alto</Label>
              </div>
            </RadioGroup>
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
import { WeightEnum } from '@/data/enums/weight.enum.ts'

const { a_step } = storeToRefs(useProcessStore())

const form = reactive({
  value: '',
  weight: WeightEnum.LOW,
  type: undefined,
})

defineProps<{
  title: string
  description?: string
}>()

import { computed, reactive, ref } from 'vue'
import GlobalSelect from '@/components/GlobalSelect.vue'
import { ufpEnum } from '@/data/enums/ufp.enum.ts'
import { DrawerClose } from '@/components/ui/drawer'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'

const submit_is_disabled = computed(() => {
  return !form.value || !form.type
})

const is_open = ref(false)

const onSubmit = () => {
  a_step.value.push({
    value: form.value,
    weight: form.weight,
    type: form.type!,
  })
  form.value = ''
  form.weight = WeightEnum.LOW
  form.type = undefined
  is_open.value = false
}
</script>
