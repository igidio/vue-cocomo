<template>
    <div class="text-center">
      <div class="text-sm text-gray-500">{{ t("read.tabs.costs.container.title") }}</div>
      <div class="text-2xl font-bold">${{ project.e_cost }}</div>
    </div>
    <div class="text-sm text-gray-500 text-center">
      {{ t("read.tabs.costs.container.subtitle.1") }}
      {{ t("read.tabs.costs.container.subtitle.2", { value: project.d_cocomo.effort_estimation }, project.d_cocomo.effort_estimation) }}
      {{ t("read.tabs.costs.container.subtitle.3") }}
      {{ t("read.tabs.costs.container.subtitle.4", { value: project.d_cocomo.time_estimation }, project.d_cocomo.time_estimation ) }}
      {{ t("read.tabs.costs.container.subtitle.5") }}
    </div>
</template>
<script setup lang="ts">
import type { Item } from '@/data/interfaces'
import { useI18n } from 'vue-i18n'

defineProps<{ project: Item }>()
const { t } = useI18n()
</script>
