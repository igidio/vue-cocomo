import type { Item } from '@/data/interfaces/item.interface.ts'

export interface adapterInterface {
  create: (item: Partial<Item>) => Promise<string>;
  read: (id: string) => Promise<Item>;
  readAll: () => Promise<Item[]>;
  update: (id: string, item: Partial<Item>) => Promise<void>;
  delete: (id: string) => Promise<void>;
}
