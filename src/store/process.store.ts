import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { a_step_data, b_step_Data, software_data } from '@/data/sample'
import { getComplexity } from '@/data/objects/get_complexity.ts'
import type { c_step_interfaace } from '@/data/interfaces'

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
  // C Step: Conversion of function points to lines of code
  const c_step = ref<c_step_interfaace>({
    value: 0,
    label: '',
  })
  const lines_of_code = computed(() => {
    console.log('c_step.value', c_step.value)
    return afp_result.value * c_step.value.value
  })
  const kilolines_of_code = computed(() => {
    return lines_of_code.value / 1000
  })
  // Step D: Application
  const d_step = ref(software_data['Orgánico'])
  const effort_estimation = computed(() => d_step.value['A'] * (kilolines_of_code.value ** d_step.value['B']) )
  const time_estimation = computed(() => d_step.value['C'] * (effort_estimation.value ** d_step.value['D']))
  const team_size_calculation = computed(() => Math.ceil(effort_estimation.value / time_estimation.value))

  return {
    // A Step
    a_step,
    ufpResult: ufp_result,
    typeResults,
    // B Step
    b_step,
    afp_sum,
    afp_result,
    // C Step
    c_step,
    lines_of_code,
    kilolines_of_code,
    // D Step
    d_step,
    effort_estimation,
    time_estimation,
    team_size_calculation
  }
})
