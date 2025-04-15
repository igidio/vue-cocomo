<template>
  <StepCard :title="t('steps.4.title')" :content="t('steps.4.content')">
    <template #top>
      <div class="flex flex-col gap-2">
      <div class="flex flex-row gap-2 mb-4">


        <div class="flex flex-col grow gap-2">
          <span>{{ t('steps.4.input.label') }}:</span>
          <GlobalSelect
            :placeholder="t('steps.4.input.placeholder')"
            :options="
          Object.entries(software_data).map(([key, value]) => ({
            label: t('steps.4.models.' + key),
            value: value,
          }))
        "
            v-model:selected_value="d_step"
          />
          <IconItem
            v-if="!effort_estimation && !time_estimation"
            :label="t('steps.alerts.must_enter_other_functions')"
            :icon="CircleAlert"
          />

          <div class="text-end flex flex-col" v-else>
            <i18n-t keypath="steps.4.results.1.label" scope="global" tag="div" >
              <span class="font-bold">{{ t('steps.4.results.1.additional', {value: effort_estimation}, effort_estimation) }}</span>
            </i18n-t>
            <i18n-t keypath="steps.4.results.2.label" scope="global" tag="div" >
              <span class="font-bold">{{ t('steps.4.results.2.additional', {value: time_estimation}, time_estimation) }}</span>
            </i18n-t>
            <i18n-t keypath="steps.4.results.3.label" scope="global" tag="div" >
              <span class="font-bold">{{ t('steps.4.results.3.additional', {value: team_size_calculation}, team_size_calculation) }}</span>
            </i18n-t>
          </div>




        </div>
      </div>
        <div class="w-full">
          <GlobalTable :headers="columns" :data="mapData" />
        </div>
      </div>
    </template>
  </StepCard>

  <div class="flex flex-row gap-6 w-full">


  </div>

</template>

<script setup lang="ts">
import { software_data } from '../../data/sample'
import GlobalTable from '@/components/GlobalTable.vue'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import { storeToRefs } from 'pinia'
import { useProcessStore } from '@/store/process.store.ts'
import GlobalSelect from '@/components/GlobalSelect.vue'
import StepCard from '@/components/steps/StepCard.vue'
import { CircleAlert } from 'lucide-vue-next'
import IconItem from '@/components/steps/IconItem.vue'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t } = useI18n()
const { d_step, effort_estimation, time_estimation, team_size_calculation } =
  storeToRefs(useProcessStore())

const columns: header_column_interface[] = [
  { label: 'Software' },
  { label: 'A' },
  { label: 'B' },
  { label: 'C' },
  { label: 'D' },
]

const mapData = computed<table_data_interface[][]>(() => Object.entries(software_data).map(([key, values]) => [
  { value: t('steps.4.models.' + key) },
  { value: values.A },
  { value: values.B },
  { value: values.C },
  { value: values.D },
]))
</script>
