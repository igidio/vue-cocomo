<template>
  <Select v-model="selectedValue">
    <SelectTrigger>
      <SelectValue :placeholder="placeholder" />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem
          v-for="(option, index) in options" :key="index"
          :value="option as AcceptableValue"
        >
          {{ option.label }}
        </SelectItem>
      </SelectGroup>
    </SelectContent>
  </Select>
</template>

<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { AcceptableValue } from 'reka-ui'

defineProps<{
  placeholder: string,
  options: {
    label: string
    value: string|number|boolean
  }[]
}>()

const selectedValue = defineModel('selected_value')
</script>
