import type { WeightEnum } from '@/data/enums/weight.enum.ts'

export interface Item {
  _id:      string;
  date:     Date;
  name:    string;
  a_ufp:    AUfp;
  b_afp:    BAFP;
  c_ldc:    CLdc;
  d_cocomo: DCocomo;
  e_cost:   number;
}

export interface AUfp {
  items:           AUfpItem[];
  results_by_type: Partial<ResultsByType>;
  result:          number;
}

export interface AUfpItem {
  value:  string;
  weight: Weight|WeightEnum;
  type:   Type;
}

export enum Type {
  ConsultasExternas = "Consultas externas",
  EntradasExternas = "Entradas externas",
  SalidasInternas = "Salidas internas",
}

export enum Weight {
  Alto = "Alto",
  Bajo = "Bajo",
  Medio = "Medio",
}

export interface ResultsByType {
  "Entradas externas":  Ternas;
  "Salidas internas":   Ternas;
  "Consultas externas": Ternas;
}

export interface Ternas {
  label: Type;
  value: number;
}

export interface BAFP {
  items:  BAFPItem[];
  sum:    number;
  result: number;
}

export interface BAFPItem {
  value: string;
  score: number;
}

export interface CLdc {
  selected_language: string;
  lines_of_code:     number;
  kilolines_of_code: number;
}

export interface DCocomo {
  model:                 Model;
  effort_estimation:     number;
  time_estimation:       number;
  team_size_calculation: number;
}

export interface Model {
  A: number;
  B: number;
  C: number;
  D: number;
}
