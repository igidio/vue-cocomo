import type { Component } from 'vue'

export interface table_data_interface {
  value: string|number|boolean|Component;
  tooltip?: string;
  class?: string;
}
