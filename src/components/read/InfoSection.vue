<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h3 class="text-sm font-medium mb-2">Líneas de Código</h3>
      <div class="space-y-1">
        <div class="flex justify-between text-sm">
          <span>{{ t("read.tabs.info.container.column_1.item_1") }}</span>
          <span class="font-semibold">{{ project.c_ldc.selected_language }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>{{ t("read.tabs.info.container.column_1.item_2") }}</span>
          <span class="font-semibold">{{ project.c_ldc.lines_of_code.toFixed(2) }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>{{ t("read.tabs.info.container.column_1.item_3") }}</span>
          <span class="font-semibold">{{ project.c_ldc.kilolines_of_code.toFixed(2) }}</span>
        </div>
      </div>
    </div>
    <div>
      <h3 class="text-sm font-medium mb-2">Modelo COCOMO</h3>
      <div class="space-y-1">
        <div class="flex justify-between text-sm">
          <span>Modelo:</span>
          <span class="font-semibold">{{ project.d_cocomo.selected_model }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>{{ t("read.tabs.info.container.column_2.item_2.label") }}</span>
          <span class="font-semibold">{{ t('read.tabs.info.container.column_2.item_2.additional', { value: project.d_cocomo.effort_estimation }, project.d_cocomo.effort_estimation)
            }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>{{ t("read.tabs.info.container.column_2.item_3.label") }}</span>
          <span class="font-semibold">{{ t(
            "read.tabs.info.container.column_2.item_3.additional",
            { value: project.d_cocomo.time_estimation},
            project.d_cocomo.time_estimation
          ) }}</span>
        </div>
        <div class="flex justify-between text-sm">
          <span>{{ t("read.tabs.info.container.column_2.item_4.label") }}:</span>
          <span class="font-semibold">{{ t("read.tabs.info.container.column_2.item_4.additional", { value: project.d_cocomo.team_size_calculation}, project.d_cocomo.team_size_calculation) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { Item } from '@/data/interfaces'
import { useI18n } from 'vue-i18n'
defineProps<{ project: Item }>()
const { t } = useI18n()
</script>
