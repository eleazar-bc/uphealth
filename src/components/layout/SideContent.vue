<template>
<div class="side-content">
    <Total v-bind:content="cartTotal" />
    <div class="main-content container">
      <div class="content-title">Current Orders</div>
      <CartItem v-for="product in cartItems" v-bind:key="product.id" v-bind:product="product"/>
      <div v-if="cartItems.length == 0" class="empty-container">
        <p class="empty-message">Click <img src="images/Card Icon 1.png" alt=""> to add items.</p>
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

.main-content {
  padding: 1em;
}

.content-title {
  font-size: 1.125rem;
  line-height: 13px;
  margin: 1em 0;
}
.empty-container {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #F0F2F8;
}
.empty-container .empty-message {
  display: flex;
  align-items: center;
  opacity: .8;
}
.empty-container .empty-message img {
  margin: 0 .5em;
}
@media (max-width: 768px) {
  .side-content {
    width: 100%;
  }
}
</style>