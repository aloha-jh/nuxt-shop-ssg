import { fetchCartItems } from '../api/shop'

export const state = () => ({
  carts: [],
})

export const mutations = {
  addCart(state, product) {
    const newProduct = {
      ...product,
      imageUrl: `${product.imageUrl}?random=${Math.random()}`,
    }
    state.carts.push(newProduct)
  },
  setCart(state, carts) {
    state.carts = carts
  },
}

export const actions = {
  async fetchCarts(context) {
    const { data } = await fetchCartItems()
    context.commit(
      'setCart',
      data.map((v) => ({
        ...v,
        imageUrl: `${v.imageUrl}?random=${Math.random()}`,
      }))
    )
  },
  async nuxtServerInit(storeContext, nuxtContext) {
    await storeContext.dispatch('fetchCarts')
  },
}
