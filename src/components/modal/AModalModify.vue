<template>
  <GlobalDrawer trigger="Agregar" :label="label" v-model="is_open">
    <template v-slot:default>
      <form class="space-y-6" @submit="submit">
        <div class="flex flex-row gap-4 w-full">
          <div class="flex flex-col w-1/2 gap-4">
            <Label>{{t('steps.1.modals.inputs.name.label')}}</Label>
            <Input type="text" class="w-full" v-model="form.value" :placeholder="t('steps.1.modals.inputs.name.placeholder')" />

            <Label>{{t('steps.1.modals.inputs.type.label')}}</Label>
            <GlobalSelect
              :placeholder="t('steps.1.modals.inputs.type.placeholder')"
              :options="
                Object.entries(ufpEnum).map(([key, value]) => ({
                  label: t('steps.1.values.' + value),
                  value: value,
                }))
              "
              v-model:selected_value="form.type"
            />
          </div>
          <div class="flex flex-col grow">
            <Label class="mb-4">{{t('steps.1.modals.inputs.complexity.label')}}</Label>
            <RadioGroup
              :default-value="WeightEnum.LOW"
              :orientation="'horizontal'"
              v-model="form.weight"
            >
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-one" :value="WeightEnum.LOW" />
                <Label for="option-one">{{ t("steps.1.weights.low") }}</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-two" :value="WeightEnum.MEDIUM" />
                <Label for="option-two">{{ t("steps.1.weights.medium") }}</Label>
              </div>
              <div class="flex items-center space-x-2">
                <RadioGroupItem id="option-three" :value="WeightEnum.HIGH" />
                <Label for="option-three">{{ t("steps.1.weights.high") }}</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <DrawerClose>
        <Button variant="outline">{{ t("ui.cancel") }}</Button>
      </DrawerClose>
        <Button variant="destructive" @click="remove"> {{ t("ui.delete") }}</Button>
      <Button :disabled="submit_is_disabled" @click="submit">{{ t("ui.add") }}</Button>
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
import { computed, reactive, watch } from 'vue'
import GlobalSelect from '@/components/GlobalSelect.vue'
import { ufpEnum } from '@/data/enums/ufp.enum.ts'
import { DrawerClose } from '@/components/ui/drawer'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { Type } from '@/data/interfaces'
import { useI18n } from 'vue-i18n'

const { a_step } = storeToRefs(useProcessStore())
const { t } = useI18n()
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

const is_open = defineModel({
  type: Boolean
})
watch(
  () => is_open.value,
  () => {
    if (!is_open.value) return;
    form.value = a_step.value[props.id].value;
    form.weight = a_step.value[props.id].weight as WeightEnum;
    form.type = a_step.value[props.id].type;
  },
)

const submit_is_disabled = computed(() => {
  return !form.value || !form.type
})

const submit = () => {
  a_step.value[props.id].value = form.value
  a_step.value[props.id].weight = form.weight
  a_step.value[props.id].type = form.type as Type
  is_open.value = false
}

const remove = () => {
  a_step.value.splice(props.id, 1)
  is_open.value = false
}
</script>
