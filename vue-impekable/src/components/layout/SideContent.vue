<template>
<div class="side-content">
    <Total v-bind:content="cartTotal" />
    <div class="current-orders container">
      <div class="details-title">Current Orders</div>
      <div class="details">
        <CartItem v-for="product in cartItems" v-bind:key="product.id" v-bind:product="product"/>
      </div>
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

.current-orders {
  padding: 1em;
}

.details-title {
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