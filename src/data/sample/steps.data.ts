import { Calculator, ChartNoAxesGantt, DollarSign, Layers, Layers2 } from 'lucide-vue-next'
import AStep from '@/components/steps/AStep.vue'
import BStep from '@/components/steps/BStep.vue'
import CStep from '@/components/steps/CStep.vue'
import DStep from '@/components/steps/DStep.vue'
import EStep from '@/components/steps/EStep.vue'

export default [
  {
    step: 1,
    icon: Layers,
    component: AStep,
  },
  {
    step: 2,
    component: BStep,
    icon: Layers2,
  },
  {
    step: 3,
    component: CStep,
    icon: ChartNoAxesGantt,
  },
  {
    step: 4,
    component: DStep,
    icon: Calculator,
  },
  {
    step: 5,
    component: EStep,
    icon: DollarSign,
  },
]
