<template>
  <Table>
    <TableCaption v-if="data.length == 0">La tabla está vacía.</TableCaption>
    <TableCaption>{{ caption }}</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead :class="header.class" v-for="(header, index) in headers" :key="index">
          {{ header.label }}
        </TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow v-for="(row, index) in data" :key="index" class="cursor-pointer" @click="() => on_click && on_click(index)">
        <TableCell class="font-medium" v-for="(data, index) in row" :key="index">
          <TableData :data="data"></TableData>
        </TableCell>
      </TableRow>

    </TableBody>
  </Table>
</template>

<script setup lang="ts">
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import type { header_column_interface, table_data_interface } from '@/data/interfaces'
import TableData from '@/components/TableData.vue'

defineProps<{
  caption?: string
  headers: header_column_interface[]
  data: table_data_interface[][]
  on_click?: (id: number) => void
}>()
</script>
