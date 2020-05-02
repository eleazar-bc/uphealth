<template>
<div class="side-content">
    <Total v-bind:content="orders[0]" />
    <div class="current-orders container">
      <div class="details-title">Current Orders</div>
      <div class="details">
        <CartItem v-for="product in products" v-bind:key="product.id" v-bind:product="product"/>
      </div>
    </div>
</div>
</template>

<script>
import CartItem from '../CartItem.vue';
import Total from '../Total.vue';

export default {
    name: 'SideContent',
    components: {CartItem, Total},
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
            }],
          orders: [{
            total: '$21,456'
          }]
      }
    }
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