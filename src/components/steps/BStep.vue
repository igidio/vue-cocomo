<template>
  <StepCard :title="t('steps.2.title')" :content="t('steps.2.content')">
    <template #top>
      <div class="flex flex-col gap-2 mb-4">
        <GlobalTable :headers="columns" :data="mapData" :on_click="open_modal" />
        <div class="flex flex-row w-full justify-center">
          <BModalModify :label="t('steps.2.modals.modify')" v-model="is_open" :id="selected" />
          <BModalCreate :label="t('steps.1.modals.create')" />
        </div>
      </div>
    </template>
    <template #bottom>
      <div class="flex flex-row w-full gap-2">
        <div class="w-1/2 flex flex-col gap-2 justify-end">
          <IconItem
            v-if="afp_result === 0 || b_step.length === 0"
            :label="t('steps.alerts.must_enter_functions')"
            :icon="CircleAlert"
          />
        </div>

        <div
          class="text-end flex flex-col bg-gray-50 p-2 rounded-md border border-gray-300 gap-1 grow"
        >
          <div>
            {{ t("steps.2.results.1") }}: <span class="font-bold">{{ afp_sum }}</span>
          </div>
          <div>
            {{ t("steps.2.results.2") }}: <span class="font-bold">{{ afp_result.toFixed(2) }}</span>
          </div>
        </div>
      </div>
    </template>
  </StepCard>
</template>

<script setup lang="ts">
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { computed, type ComputedRef, ref } from 'vue'
import { useProcessStore } from '@/store/process.store.ts'
import { storeToRefs } from 'pinia'
import GlobalTable from '@/components/GlobalTable.vue'
import BModalCreate from '@/components/modal/BModalCreate.vue'
import BModalModify from '@/components/modal/BModalModify.vue'
import StepCard from '@/components/steps/StepCard.vue'
import { CircleAlert } from 'lucide-vue-next'
import IconItem from '@/components/steps/IconItem.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { b_step, afp_sum, afp_result } = storeToRefs(useProcessStore())

const columns = computed<header_column_interface[]>(() => [
  {
    label: t("steps.2.table_columns.1"),
  },
  {
    label: t("steps.2.table_columns.2"),
  },
  {
    label: t("steps.2.table_columns.3"),
  },
])

const mapData: ComputedRef<table_data_interface[][]> = computed(() => {
  return b_step.value.map((item, index) => [
    {
      class: 'font-medium',
      value: index + 1,
    },
    {
      class: 'text-left',
      value: item.value,
    },
    {
      class: 'text-center',
      value: item.score,
    },
  ])
})

// Modal
const is_open = ref(false)
const selected = ref(NaN)
const open_modal = (id: number) => {
  selected.value = id
  is_open.value = true
}
</script>
