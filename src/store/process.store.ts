import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { a_step_data, b_step_Data } from '@/data/sample'
import { getComplexity } from '@/data/objets/get_complexity.ts'

export const useProcessStore = defineStore('process', () => {

  // A Step: UFP
  const a_step = ref(a_step_data);

  const ufp_result = computed(() => {
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

  // B Step: AFP
  const b_step = ref(b_step_Data)
  const afp_sum = computed(() => {
    return b_step.value.reduce((acc, item) => {
      acc += item.score
      return acc
    }, 0)
  })
  const afp_result = computed(() => {
    return ufp_result.value * (0.65 + 0.01 * afp_sum.value)
  })

  return {
    // A Step
    a_step,
    ufpResult: ufp_result,
    typeResults,
    // B Step
    b_step,
    afp_sum,
    afp_result
  }
})
