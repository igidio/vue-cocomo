<template>
  <Select v-model="selectedValue as AcceptableValue">
    <SelectTrigger class="w-full">
      <SelectValue :placeholder="placeholder"  />
    </SelectTrigger>
    <SelectContent>
      <SelectGroup>
        <SelectItem
          class="w-full"
          v-for="(option, index) in options" :key="index"
          :value="option.value as AcceptableValue"
        >
          <SelectItemText>{{ option.label }}</SelectItemText>

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
  SelectItem, SelectItemText,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import type { AcceptableValue } from 'reka-ui'

defineProps<{
  placeholder: string,
  options: {
    label: string
    value: string|number|boolean|object
  }[]
}>()

const selectedValue = defineModel('selected_value')
</script>
