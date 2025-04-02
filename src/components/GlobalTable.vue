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
        <TableCell class="font-medium" v-for="(value, index) in row" :key="index">
          <div v-if="typeof value !== 'boolean'">{{ value }}</div>
          <div v-else>
            <div v-if="value" class="text-sm"><CircleCheck /></div>
          </div>
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
  caption: string
  headers: header[]
  data:  (string | boolean | number)[][]
}>()
</script>
