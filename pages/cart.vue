<template>
  <div class="container">
    <h1 class="list-title">담긴 상품 목록</h1>
    <cart-list></cart-list>
    <div class="extra-panel">
      <button>구매하기</button>
    </div>
  </div>
</template>

<script>
import cartList from '../components/cartList.vue'
export default {
  components: { cartList },
  //   async asyncData({ store }){
  //     await store.dispatch('shop/fetchCarts')
  //   }
}
</script>
