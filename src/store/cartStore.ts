const CART_STORE_KEY = 'cart-store'

interface Product {
  id: string
  name: string
  image: string
  price: number
  quantity: number
}

interface Store {
  cart: Product[]
}

const INITIAL_STATE: Store = {
  cart: []
}

const get = (): Store => {
  const value = window.localStorage.getItem(CART_STORE_KEY)
  return value ? JSON.parse(value) : INITIAL_STATE
}

const set = (store: Store) => {
  window.localStorage.setItem(CART_STORE_KEY, JSON.stringify(store))
}

const add = (newProduct: Product) => {
  const store = get()
  const { cart } = store

  const productExist = cart.find((product) => product.id === newProduct.id)

  if (productExist) {
    productExist.quantity += 1
    set(store)
    return
  }

  store.cart.push(newProduct)
  set(store)
}

const remove = (id: string) => {
  const store = get()
  const { cart } = store

  const productExist = cart.find((product) => product.id === id)

  if (!productExist) return

  store.cart = store.cart.filter((product) => product.id !== id)
  set(store)
}

const quantity = (id: string, quantity: number) => {
  const store = get()
  const { cart } = store

  const productExist = cart.find((product) => product.id === id)

  if (!productExist) return

  productExist.quantity = quantity
  set(store)
}

const clear = () => set(INITIAL_STATE)

const store = {
  get,
  set,
  add,
  remove,
  quantity,
  clear
}

export default store
