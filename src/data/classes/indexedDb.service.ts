import type { adapterInterface, Item } from '@/data/interfaces'

class IndexedDbService implements adapterInterface {
  protected db: IDBDatabase | null = null

  constructor(
    protected db_name: string = 'my_database',
    protected store_name: string = 'items',
  ) {
    this.db_name = db_name
    this.store_name = store_name
  }

  initDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.db_name, 1)
      request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
        const new_db = (event.target as IDBOpenDBRequest).result
        new_db.createObjectStore(this.store_name, { keyPath: "_id" })
      }
      request.onsuccess = (event: Event) => {
        this.db = (event.target as IDBOpenDBRequest).result
        console.log('Database initialized successfully')
        resolve(this.db)
      }
      request.onerror = (event: Event) => {
        console.error('IndexedDB error:', (event.target as IDBOpenDBRequest).error)
        reject()
      }
    })

  }

  private delete_database(): void {
    const deleteRequest = indexedDB.deleteDatabase(this.db_name)

    deleteRequest.onsuccess = () => {
      console.log('Database deleted successfully')
    }
    deleteRequest.onerror = (event: Event) => {
      console.error('Error deleting database:', (event.target as IDBOpenDBRequest).error)
    }
  }

  private transaction(mode: IDBTransactionMode): IDBObjectStore {
    if (!this.db) throw new Error('Database not initialized')
    const transaction = this.db.transaction(this.store_name, mode)
    return transaction.objectStore(this.store_name)
  }

  private refs_to_object(object: object) {
    return JSON.parse(JSON.stringify(object))
  }

  private generate_uuid() {
    return crypto.randomUUID()
  }

  create(item: Partial<Item>): string {
    const store = this.transaction('readwrite')
    const object = this.refs_to_object(item)
    const result = store.add({ ...object, _id: this.generate_uuid() })
    return JSON.stringify(result)
  }

  async read<T>(id: string): Promise<T> {
    return new Promise((resolve, reject) => {
      const store = this.transaction('readonly')
      const request = store.get(id)

      request.onsuccess = () => {
        if (request.result === undefined) reject("Item not found")
        resolve(request.result)
      }
      request.onerror = () => reject(request.error)
    })
  }

  async readAll(): Promise<Item[]> {
    return new Promise((resolve, reject) => {
      const store = this.transaction('readonly')
      const request = store.getAll()

      request.onsuccess = () => resolve(request.result)
      request.onerror = () => reject(request.error)
    })
  }

  async update<T>(id: string, item: T): Promise<void> {
    console.log(id)
    const store = this.transaction('readwrite')
    const object = this.refs_to_object(item as object)
    console.log(id)
    store.put({ ...object, _id: id })
  }

  async delete(id: string): Promise<void> {
    const store = this.transaction('readwrite')
    store.delete(id)
  }
}

export const indexedDBInstance = (async () => {
  const instance = new IndexedDbService()
  await instance.initDB()
  return instance
})();
