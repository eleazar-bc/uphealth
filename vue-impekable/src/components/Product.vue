<template>
<div class="product">
    <div class="product-name"><img v-bind:src="product.src" alt=""> {{product.name}}</div>
    <div class="product-availability" v-bind:class="`background-${product.color}`">{{product.availability}}</div>
    <div class="product-total">{{product.price}}</div>
</div>
</template>

<script>
export default {
    name: 'Product',
    props: ['product']
}
</script>

<style>
.home .home-wrapper .home-content .top-products .products .product {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 82px;
  font-size: 0.8125rem;
  border-bottom: 1px solid #F1F1F3;
}

.home .home-wrapper .home-content .top-products .products .product .product-name {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 50%;
}

.home .home-wrapper .home-content .top-products .products .product .product-name img {
  margin-right: 1em;
}

.home .home-wrapper .home-content .top-products .products .product .product-availability {
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
</style>