import type { adapterInterface, Item } from '@/data/interfaces'

export class DatabaseService implements adapterInterface {
  constructor(private readonly database: adapterInterface) {}

  async create(item: Partial<Item>): Promise<string> {
    return await this.database.create(item)
  }

  async delete(id: string): Promise<void> {
    console.log(id)
    await this.database.delete(id)
  }

  async read(id: string): Promise<Item> {
    return await this.database.read(id)
  }

  async readAll(): Promise<Item[]> {
    return await this.database.readAll()
  }

  async update(id: string, item: Partial<Item>): Promise<void> {
    console.log(id)
    console.log(item)
    await this.database.update(id, item)
  }
}
