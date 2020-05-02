<template>
<div class="detail">
    <div class="detail-description">
        <span class="name">{{product.name}}</span>
        <span class="quantity">Quantity: {{product.quantity}}</span>
    </div>
    <div class="detail-value">&#8369; {{product.total}}</div>
    <img @click="removeFromCart(product)" class="remove-button" src="images/close.png" alt="">
</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'CartItem',
    props: ['product'],
    methods: {
      ...mapActions(['removeFromCart'])
    }
}
</script>

<style>
.detail {
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

.detail .detail-description {
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

.name {
  opacity: .8;
}

.quantity {
  opacity: .5;
}

.detail .detail-description img {
  margin-right: 1em;
}

.detail .detail-value {
  font-size: 0.9375rem;
  line-height: 25px;
}

.remove-button:hover {
  cursor: pointer;
}
</style>