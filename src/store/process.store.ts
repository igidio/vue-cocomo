import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { a_step_data } from '@/data/sample'
import { getComplexity } from '@/data/objets/get_complexity.ts'

export const useProcessStore = defineStore('process', () => {

  // A Step: UFP
  const a_step = ref(a_step_data);

  const ufpResult = computed(() => {
    return a_step.value.reduce((acc, item) => {
      acc += getComplexity[item.type][item.weight]
      return acc
    }, 0)
  })

  const typeResults = computed(() => {
    return a_step.value.reduce(
      (acc, item) => {
        const type = item.type
        acc[type] = acc[type] || { label: type, value: 0 }
        acc[type].value += getComplexity[type][item.weight]
        return acc
      },
      {} as Record<string, { label: string; value: number }>,
    )
  })

  return {
    // A Step
    a_step,
    ufpResult,
    typeResults
  }
})
