import type { Product } from '@/types/product'
const { API_BASE_URL } = import.meta.env

const request = async <T>(path: string) => {
  const res = await fetch(`${API_BASE_URL}${path}`)
  return res.json() as Promise<T>
}

const products = async (category?: string) => {
  let params = ''
  if (category) params = `?category=${category}`
  return await request<{ products: Product[] }>(`/product${params}`)
}

const product = async (slug: string) => await request<{ product: Product }>(`/product/${slug}`)

export default { products, product }
