<template>
  <Table>
    <TableCaption>{{ caption }}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead :class="header.class" v-for="(header, index) in headers" :key="index">
          {{ header.label }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(row, index) in data" :key="index">
        <TableCell class="font-medium" v-for="(data, index) in row" :key="index">
          <TableData :data="data"></TableData>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import {CircleCheck} from 'lucide-vue-next'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { table_data_interface } from '@/data/interfaces'
import GlobalTooltip from '@/components/GlobalTooltip.vue'
import TableData from '@/components/TableData.vue'

interface header {
  label: string
  class?: string
}

interface data {
  id: number
  value: string
  type: 'text' | 'number' | 'boolean'
}

interface TableData {
  headers: header[]
  data: data[]
}

const props = defineProps<{
  caption?: string
  headers: header[]
  data:  table_data_interface[][]
}>()
</script>
