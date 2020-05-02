<template>
<div class="product">
    <div class="product-info">
      <div class="product-name">{{product.name}}</div>
      <div class="product-description">{{product.description}}</div>
    </div>
    <div class="product-availability" v-bind:class="`background-${product.color}`">{{product.availability}}</div>
    <div class="product-price">{{product.price}}</div>
    <div class="buy-button"><img src="images/Card Icon 1.png" alt=""></div>
</div>
</template>

<script>
export default {
    name: 'Product',
    props: ['product']
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
  line-height: 20px;
}

.product .product-info .product-description {
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

.product .buy-button:hover {
  cursor: pointer;
}
</style>