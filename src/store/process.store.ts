import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { software_data } from '@/data/sample'
import { getComplexity } from '@/data/objects/get_complexity.ts'
import type { AUfpItem, c_step_interfaace } from '@/data/interfaces'
import { AxiosService } from '@/data/classes/axios.service.ts'
import { DatabaseService } from '@/data/classes'

export const useProcessStore = defineStore('process', () => {
  const mode = ref('create')
  const id = ref<string|string[]>('')

  const database = new DatabaseService(new AxiosService(import.meta.env.VITE_SERVER_URL))
  const name = ref('Nuevo proyecto')
  // A Step: UFP
  //const a_step = ref(a_step_data);
  const a_step = ref<AUfpItem[]>([]);

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
      {},
    )
  })

  // B Step: AFP
  //const b_step = ref(b_step_Data)
  const b_step = ref<{ value: string, score: number  }[]>([])
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
  const c_step = ref({} as c_step_interfaace)
  const lines_of_code = computed(() => {
    return afp_result.value * c_step.value.code_lines
  })
  const kilolines_of_code = computed(() => {
    return lines_of_code.value / 1000
  })
  // Step D: Application
  const d_step = ref(software_data['Orgánico'])
  const selected_model =  computed(() => Object.entries(software_data).filter((values) => { return JSON.stringify(values[1]) == JSON.stringify((d_step.value)) })[0][0])
  const effort_estimation = computed(() => Math.ceil(d_step.value['A'] * (kilolines_of_code.value ** d_step.value['B']) ))
  const time_estimation = computed(() => Math.ceil(d_step.value['C'] * (effort_estimation.value ** d_step.value['D'])))
  const team_size_calculation = computed(() => Math.ceil(effort_estimation.value / time_estimation.value || 0))
  // Step E: Development cost estimation
  const e_step = computed(() => team_size_calculation.value * time_estimation.value * 500)
  // Create
  const final_object = computed(() => ({
    name: name.value,
    date: new Date(),
    a_ufp: {
      items: a_step.value,
      results_by_type: typeResults.value,
      result: ufp_result.value,
    },
    b_afp: {
      items: b_step.value,
      sum: afp_sum.value,
      result: afp_result.value,
    },
    c_ldc: {
      selected_language: c_step.value.label,
      lines_of_code: lines_of_code.value,
      kilolines_of_code: kilolines_of_code.value,
    },
    d_cocomo: {
      model: d_step.value,
      selected_model: selected_model.value,
      effort_estimation: effort_estimation.value,
      time_estimation: time_estimation.value,
      team_size_calculation: team_size_calculation.value,
    },
    e_cost: e_step.value,
  }))
  return {
    mode,
    id,
    database,
    // A Step
    a_step,
    ufp_result,
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
    selected_model,
    effort_estimation,
    time_estimation,
    team_size_calculation,
    // E Step
    e_step,
    // Create
    final_object,
    name
  }
})
