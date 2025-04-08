import type { adapterInterface, Item } from '@/data/interfaces'
import { undefined } from 'zod'

export class IndexedDbService implements adapterInterface {
  constructor(adapter: any) {
    this.adapter = adapter;
  }

  create(item: Partial<Item>): Promise<void> {
    return Promise.resolve(undefined)
  }

}
