import { Calculator, ChartNoAxesGantt, DollarSign, Layers, Layers2 } from 'lucide-vue-next'
import AStep from '@/components/steps/AStep.vue'
import BStep from '@/components/steps/BStep.vue'
import CStep from '@/components/steps/CStep.vue'
import DStep from '@/components/steps/DStep.vue'
import EStep from '@/components/steps/EStep.vue'

export default [
  {
    step: 1,
    title: 'Cálculo de PFSA',
    description: 'Cálculo de puntos de función sin ajustar',
    icon: Layers,
    component: AStep,
    content: `
      Los PFSA se calculan identificando las funciones del sistema, como entradas, salidas, consultas, archivos internos y archivos externos.

      Asigna un peso a cada función según su complejidad (baja, media, alta) y suma los valores para obtener el PFSA, donde:

      - **Entradas externas (EI):** Datos que ingresan al sistema desde el usuario o sistemas externos.
      - **Salidas externas (EO):** Información que el sistema genera y envía al usuario o sistemas externos.
      - **Consultas externas (EQ):** Interacciones que permiten al usuario obtener información específica.
      - **Ficheros lógicos internos (ILF):** Bases de datos o archivos gestionados por el sistema.
      - **Ficheros lógicos externos (ELF):** Bases de datos o archivos gestionados por sistemas externos pero utilizados por el sistema.

      Es importante asignar complejidad, según los criterios como el número de campos o el nivel de interacción. De acuerdo a la complejidad es que se asigna un peso para cada función del sistema.
    `,
  },
  {
    step: 2,
    title: 'Cálculo de PFA',
    description: 'Puntos de función ajustados',
    component: BStep,
    icon: Layers2,
    content: `HOla`
  },
  {
    step: 3,
    title: 'Conversión de PF a LDC',
    description: 'Conversión de puntos de función ajustados a líneas de código',
    component: CStep,
    icon: ChartNoAxesGantt,
    content: `HOla`
  },
  {
    step: 4,
    title: 'Aplicación de COCOMO',
    description: 'Aplicación del COCOMO',
    component: DStep,
    icon: Calculator,
    content: `HOla`
  },
  {
    step: 5,
    title: 'Costo de desarrollo',
    description: 'Resultados del cálculo',
    component: EStep,
    icon: DollarSign,
    content: `HOla`
  },
]
