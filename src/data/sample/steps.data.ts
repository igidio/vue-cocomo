import { Calculator, ChartNoAxesGantt, DollarSign, Layers, Layers2 } from 'lucide-vue-next'

export default [{
  step: 1,
  title: 'Calculo de PFSA',
  description: 'Cálculo de puntos de función sin ajustar',
  icon: Layers,
}, {
  step: 2,
  title: 'Cálculo de PFA',
  description: 'Puntos de función ajustados',
  icon: Layers2,
}, {
  step: 3,
  title: 'Conversión de PF a LDC',
  description: 'Conversión de puntos de función ajustados a líneas de código',
  icon: ChartNoAxesGantt,
}, {
  step: 4,
  title: 'Aplicación de COCOMO',
  description: 'Aplicación del COCOMO',
  icon: Calculator,
}, {
  step: 5,
  title: 'Costo de desarrollo',
  description: 'Resultados del cálculo',
  icon: DollarSign,
}]
