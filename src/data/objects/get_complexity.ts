import { ufpEnum } from '@/data/enums/ufp.enum.ts'
import { WeightEnum } from '@/data/enums/weight.enum.ts'

export const getComplexity = {
  [ufpEnum.EXTERNAL_INPUTS]: {
    [WeightEnum.LOW]: 3,
    [WeightEnum.MEDIUM]: 4,
    [WeightEnum.HIGH]: 6,
  },
  [ufpEnum.EXTERNAL_OUTPUTS]: {
    [WeightEnum.LOW]: 4,
    [WeightEnum.MEDIUM]: 5,
    [WeightEnum.HIGH]: 7,
  },
  [ufpEnum.EXTERNAL_QUERIES]: {
    [WeightEnum.LOW]: 3,
    [WeightEnum.MEDIUM]: 4,
    [WeightEnum.HIGH]: 6,
  },
  [ufpEnum.INTERNAL_LOGICAL_FILES]: {
    [WeightEnum.LOW]: 7,
    [WeightEnum.MEDIUM]: 10,
    [WeightEnum.HIGH]: 15,
  },
  [ufpEnum.EXTERNAL_INTERFACE_FILES]: {
    [WeightEnum.LOW]: 5,
    [WeightEnum.MEDIUM]: 7,
    [WeightEnum.HIGH]: 10,
  },
}
