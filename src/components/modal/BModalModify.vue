<template>
  <GlobalDrawer trigger="Agregar" :label="label" v-model="is_open">
    <template v-slot:default>
      <form class="space-y-6" @submit="submit">
        <div class="flex flex-row gap-4 w-full">
          <div class="flex flex-col w-1/2 gap-4">
            <Label>{{ t('steps.2.modals.inputs.name.label') }}</Label>
            <Input
              type="text"
              class="w-full"
              v-model="form.value"
              :placeholder="t('steps.2.modals.inputs.name.placeholder')"
            />
          </div>
          <div class="flex flex-col grow gap-4">
            <Label>{{ t('steps.2.modals.inputs.score.label') }}</Label>
            <Input
              type="number"
              class="w-full"
              v-model="form.score"
              min="0"
              max="5"
              :placeholder="t('steps.2.modals.inputs.score.placeholder')"
            />
            <span class="text-sm">{{ t('steps.2.modals.inputs.score.description') }}</span>
          </div>
        </div>
      </form>
    </template>

    <template v-slot:footer>
      <DrawerClose>
        <Button variant="outline">{{ t('ui.cancel') }}</Button>
      </DrawerClose>
      <Button variant="destructive" @click="remove">{{ t('ui.delete') }}</Button>
      <Button :disabled="submit_is_disabled" @click="submit">{{ t('ui.add') }}</Button>
    </template>
  </GlobalDrawer>
</template>

<script setup lang="ts">
import { computed, reactive, watch } from 'vue'
import { DrawerClose } from '@/components/ui/drawer'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import { Button } from '@/components/ui/button'
import GlobalDrawer from '@/components/GlobalDrawer.vue'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useI18n } from 'vue-i18n'

const { b_step } = storeToRefs(useProcessStore())
const { t } = useI18n()

const form = reactive({
  value: '',
  score: 0,
})

const props = defineProps<{
  label: string
  description?: string
  id: number
}>()

const submit_is_disabled = computed(() => {
  return !form.value || typeof form.score === typeof 'number' || form.score < 0 || form.score > 5
})

const is_open = defineModel({
  type: Boolean,
})
watch(
  () => is_open.value,
  () => {
    if (!is_open.value) return
    form.value = b_step.value[props.id].value
    form.score = b_step.value[props.id].score
  },
)

const submit = () => {
  b_step.value[props.id].value = form.value
  b_step.value[props.id].score = form.score
  is_open.value = false
}

const remove = () => {
  b_step.value.splice(props.id, 1)
  is_open.value = false
}
</script>
