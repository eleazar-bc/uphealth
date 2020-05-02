<template>
    <div class="top-products container">
        <div class="products-header">
            <div class="header-name">Product</div>
            <div class="header-availability">Availability</div>
            <div class="header-total">Price</div>
            <div class="header-buy">Buy</div>
        </div>
        <div class="products">
            <Product v-for="product in products" v-bind:key="product.id" v-bind:product="product" />
        </div>
    </div>
</template>

<script>
import Product from '../Product.vue';
export default {
    name: 'MainContent',
    components: {Product},
    data() {
        return {
            products: [{
                id: 1,
                name: 'Ibuprofen',
                description: 'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et',
                availability: '320 In Stock',
                color: 'green',
                price: '$29,192'
            }, {
                id: 4,
                name: 'Bio Flu',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.',
                availability: 'Out of Stock',
                color: 'red',
                price: '$29,192'
            }, {
                id: 2,
                name: 'Biogesic',
                description: 'ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
                availability: '3 In Stock',
                color: 'orange',
                price: '$29,192'
            }, {
                id: 3,
                name: 'Lozarta',
                description: 'Sample medicine description',
                availability: '3 In Stock',
                color: 'orange',
                price: '$29,192'
            },
            {
                id: 5,
                name: 'Lozarta',
                description: 'Sample medicine description',
                availability: '3 In Stock',
                color: 'orange',
                price: '$29,192'
            },
            {
                id: 6,
                name: 'Lozarta',
                description: 'Sample medicine description',
                availability: '3 In Stock',
                color: 'orange',
                price: '$29,192'
            }
            ]
        }
    }
}
</script>

<style>
.top-products {
  width: 66%;
  padding: 1em;
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
  width: 40%;
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