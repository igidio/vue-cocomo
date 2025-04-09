<template>
  <GlobalDrawer trigger="Agregar" title="Modificar elemento" v-model="is_open">
    <template v-slot:default>
      <form class="space-y-6" @submit="submit">
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
        <Button variant="destructive" @click="remove"> Eliminar</Button>
      <Button :disabled="submit_is_disabled" @click="submit">Modificar</Button>
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
import { computed, reactive, ref, watch } from 'vue'
import GlobalSelect from '@/components/GlobalSelect.vue'
import { ufpEnum } from '@/data/enums/ufp.enum.ts'
import { DrawerClose } from '@/components/ui/drawer'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'

const { a_step } = storeToRefs(useProcessStore())

const form = reactive({
  value: '',
  weight: WeightEnum.LOW,
  type: undefined as string | ufpEnum | undefined,
})

const props = defineProps<{
  label: string
  description?: string
  id: number
}>()

const is_open = defineModel()
watch(
  () => is_open.value,
  () => {
    if (!is_open.value) return;
    form.value = a_step.value[props.id].value;
    form.weight = a_step.value[props.id].weight;
    form.type = a_step.value[props.id].type;
  },
)

const submit_is_disabled = computed(() => {
  return !form.value || !form.type
})

const submit = () => {
  a_step.value[props.id].value = form.value
  a_step.value[props.id].weight = form.weight
  a_step.value[props.id].type = form.type as ufpEnum
  is_open.value = false
}

const remove = () => {
  a_step.value.splice(props.id, 1)
  is_open.value = false
}
</script>
