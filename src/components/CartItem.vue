<template>
<div class="item-container">
    <div class="item-info">
        <span class="name">{{product.name}}</span>
        <span
          v-bind:class="{'animated pulse animation-settings': animate}"
          @animationend="animate = false"
          class="quantity"
        >Quantity: {{product.quantity}}</span>
    </div>
    <div class="item-value">&#8369; {{product.total}}</div>
    <div @click="removeFromCart(product), animate=true" class="remove-button-container">
      <img class="remove-button" src="images/close.png" alt="">
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'CartItem',
    props: ['product'],
    methods: {
      ...mapActions(['removeFromCart'])
    },
    data() {
      return {
        animate: false
      }
    }
}
</script>

<style scoped>
.item-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 80px;
}

.item-container .item-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: flex-start;
  font-size: 0.8125rem;
  line-height: 20px;
  flex-direction: column;
}

.item-container .item-info .name {
  opacity: .8;
}

.item-container .item-info .quantity {
  opacity: .5;
}

.item-container .item-value {
  font-size: 0.9375rem;
  line-height: 25px;
}

.item-container .remove-button-container {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.animation-settings {
  animation-duration: 100ms;
  color: #FF7285;
}
</style>