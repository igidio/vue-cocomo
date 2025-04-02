<template>
  <GlobalTooltip :message="data.tooltip" v-if="data.tooltip">{{ data.value }}</GlobalTooltip>
  <span v-else>{{ data.value }}</span>
  <!--      <CircleCheck />-->
</template>

<script setup lang="ts">
import { CircleCheck } from 'lucide-vue-next'
import type { table_data_interface } from '@/data/interfaces'
import GlobalTooltip from '@/components/GlobalTooltip.vue'

defineProps<{ data: table_data_interface }>()
</script>
