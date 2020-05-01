<template>
    <div class="top-products container">
        <div class="products-title">Top Products</div>
        <div class="products-header">
            <div class="header-name">Product</div>
            <div class="header-availability">Availability</div>
            <div class="header-total">Total</div>
        </div>
        <div class="products">
            <Product v-for="product in products" v-bind:key="product.id" v-bind:product="product" />
        </div>
        <div class="show-more">
            Show More
        </div>
    </div>
</template>

<script>
import Product from './Product.vue';
export default {
    name: 'MainContent',
    components: {Product},
    data() {
        return {
            products: [{
                id: 1,
                name: 'Women\'s Vintage Peacoat',
                src: 'images/product1.png',
                availability: '320 In Stock',
                color: 'green',
                price: '$29,192'
            }, {
                id: 4,
                name: 'Women\'s Oatmeal Sweater',
                src: 'images/product2.png',
                availability: 'Out of Stock',
                color: 'red',
                price: '$29,192'
            }, {
                id: 2,
                name: 'Women\'s Denim Shirt',
                src: 'images/product3.png',
                availability: '3 In Stock',
                color: 'orange',
                price: '$29,192'
            }, {
                id: 3,
                name: 'Women\'s Vintage Peacoat',
                src: 'images/product4.png',
                availability: '3 In Stock',
                color: 'orange',
                price: '$29,192'
            }]
        }
    }
}
</script>

<style>
.top-products {
  width: 66%;
  padding: 1em;
}

.top-products .products-title {
  font-size: 1.125rem;
  line-height: 13px;
  margin: 1em 0;
}

.top-products .products-header {
  font-weight: 700;
  font-size: 0.6875rem;
  line-height: 15px;
  text-transform: uppercase;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #F5F6FA;
  height: 45px;
  padding: 0 1em;
}

.top-products .products-header .header-name {
  width: 50%;
}

.top-products .products {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 0 1em;
}

.top-products .show-more {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 60px;
  font-size: 0.8125rem;
  line-height: 20px;
  color: #3B86FF;
}

.top-products .show-more:hover {
  cursor: pointer;
}

@media (max-width: 768px) {
  .top-products {
    width: 100%;
    margin-bottom: 1em;
  }
}
</style>