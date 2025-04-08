import type { AxiosInstance } from 'axios'
import type { adapterInterface, Item } from '@/data/interfaces'
import { undefined } from 'zod'
import axios from 'axios'

export class AxiosService implements adapterInterface {
  private axiosInstance: AxiosInstance = axios
  baseUrl: string

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
  }

  async create(item: Partial<Item>): Promise<void> {
    try {
      await this.axiosInstance.post(this.baseUrl, item)
    } catch (error) {
      console.error('Error creating item:', error)
      throw new Error('Failed to create item')
    }
  }

  async read(id: string): Promise<Item> {
    const response = await this.axiosInstance.get(`${this.baseUrl}/${id}`)
    return response.data
  }

  async readAll(): Promise<Item[]> {
    const response = await this.axiosInstance.get(this.baseUrl)
    return response.data
  }

  async delete(id: string): Promise<void> {
    await this.axiosInstance.delete(`${this.baseUrl}/${id}`)
  }

  update(id: string, item: Partial<Item>): Promise<void> {
    return Promise.resolve(undefined)
  }
}
