<template>
<div class="side-content">
    <Total v-bind:content="cartTotal" />
    <div class="main-content container">
      <div class="content-title">Current Orders</div>
      <CartItem v-for="product in cartItems" v-bind:key="product.id" v-bind:product="product"/>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex';
import CartItem from '../CartItem.vue';
import Total from '../Total.vue';

export default {
    name: 'SideContent',
    components: {CartItem, Total},
    computed: mapGetters(['cartItems', 'cartTotal'])
}
</script>

<style scoped>
.side-content {
  width: 32%;
}

.main-content {
  padding: 1em;
}

.content-title {
  font-size: 1.125rem;
  line-height: 13px;
  margin: 1em 0;
}

@media (max-width: 768px) {
  .side-content {
    width: 100%;
  }
}
</style>