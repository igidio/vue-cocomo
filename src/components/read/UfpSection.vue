<template>
    <table class="w-full divide-y divide-gray-200">
      <thead>
      <tr>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          {{ t("read.tabs.ufp.container.table_columns.1") }}
        </th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          {{ t("read.tabs.ufp.container.table_columns.2") }}
        </th>
        <th class="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">
          {{ t("read.tabs.ufp.container.table_columns.3") }}
        </th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr
        v-for="(item, index) in project.a_ufp.items"
        :key="index"
        class="hover:bg-gray-50"
      >
        <td class="px-4 py-2 text-sm">{{ item.value }}</td>
        <td class="px-4 py-2 text-sm">{{ t(`steps.1.values.${item.type}`)  }}</td>
        <td class="px-4 py-2 text-sm">
          <span :class="getWeightClass(item.weight as Weight)">{{ t(`steps.1.weights.${item.weight.toLowerCase()}`) }}</span>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="pt-4 border-t">
      <div class="text-sm font-medium">{{ t("read.tabs.ufp.container.footer.subtitle") }}:</div>
      <div class="grid grid-rows-1 md:grid-rows-3 gap-2 mt-2">
        <div
          v-for="(result, type) in project.a_ufp.results_by_type"
          :key="type"
          class="text-sm"
        >
          {{ t(`steps.1.values.${result!.label}`) }}: <span class="font-medium">{{ result!.value }}</span>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { type Item, Weight } from '@/data/interfaces'
import { useI18n } from 'vue-i18n'

defineProps<{ project: Item }>()
const { t } = useI18n()

const getWeightClass = (weight: Weight) => {
  switch (weight) {
    case 'High':
      return 'px-2 py-0.5 bg-red-100 text-red-800 rounded text-xs'
    case 'Medium':
      return 'px-2 py-0.5 bg-yellow-100 text-yellow-800 rounded text-xs'
    case 'Low':
      return 'px-2 py-0.5 bg-green-100 text-green-800 rounded text-xs'
    default:
      return ''
  }
}
</script>
