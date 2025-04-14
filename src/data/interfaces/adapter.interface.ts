import type { Item } from '@/data/interfaces/item.interface.ts'

export interface adapterInterface {
  create: (item: Partial<Item>) => Promise<string>|string;
  read: (id: string) => Promise<Item>|Item;
  readAll: () => Promise<Item[]>|Item[];
  update: (id: string, item: Partial<Item>) => Promise<void>|void;
  delete: (id: string) => Promise<void>|void;
}
