<template>
<div class="product">
    <div class="product-info">
      <div class="product-name">{{product.name}}</div>
      <div class="product-brand">brand: {{product.brand}}</div>
      <div class="product-dosage">dosage: {{product.dosage}}</div>
      <div class="product-type">type: {{product.type}}</div>
    </div>
    <div class="product-availability" v-bind:class="availabilityBGColor">{{product.stock}}</div>
    <div class="product-price">&#8369; {{product.price}}</div>
    <div @click="addToCart(product)" class="buy-button" v-bind:class="buyButton.class">
      <img v-bind:src="buyButton.src" alt="">
    </div>
</div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
    name: 'Product',
    props: ['product'],
    methods: {
      ...mapActions(['addToCart'])
    },
    computed: {
      buyButton() {
        if(this.product.stock == 0) {
          return {
            class: 'not-available',
            src: 'images/out of stock icon.png'
          }
        }
        return {
          class: 'available',
          src: 'images/Card Icon 1.png'
        }
      },
      availabilityBGColor() {
        if(this.product.stock == 0) {
          return 'background-red';
        }
        if(this.product.stock <= 10) {
          return 'background-orange';
        }
        return 'background-green';
      }
    }
}
</script>

<style>
.product {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  min-height: 82px;
  font-size: 0.8125rem;
  border-bottom: 1px solid #F1F1F3;
  padding: 1em 0;
}

.product .product-info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: centflex-starter;
      -ms-flex-align: flex-start;
          align-items: flex-start;
  flex-direction: column;
  width: 40%;
}

.product .product-info .product-name {
  line-height: 30px;
  text-transform: capitalize;
  font-size: 1rem;
}

.product-brand, .product-dosage, .product-type {
  opacity: 50%;
}

.product .product-availability {
  border-radius: 14px;
  width: 90px;
  height: 24px;
  font-size: 0.6875rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.product .available:hover {
  cursor: pointer;
}
</style>