import { WeightEnum } from '@/data/enums/weight.enum.ts'
import { ufpEnum } from '@/data/enums/ufp.enum.ts'

export default [
  {
    value: 'Ingreso al sistema (login)',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Registro de obra',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Registro de mano de obra',
    weight: WeightEnum.HIGH,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Registro de material',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_INPUTS,
  },
  {
    value: 'Mensaje de error al ingresar al sistema',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Reporte de obra',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Reporte de seguimiento de obras',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Reporte de materiales',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_OUTPUTS,
  },
  {
    value: 'Listado de obras en ejecución',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Lista de clientes',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Listado de materiales',
    weight: WeightEnum.LOW,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Listado de obras canceladas',
    weight: WeightEnum.HIGH,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
  {
    value: 'Listado de items de obra',
    weight: WeightEnum.MEDIUM,
    type: ufpEnum.EXTERNAL_QUERIES,
  },
]
