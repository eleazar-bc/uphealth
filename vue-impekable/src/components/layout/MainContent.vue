<template>
    <div class="top-products container">
        <div class="products-header">
            <div class="header-name">Product</div>
            <div class="header-availability">Availability</div>
            <div class="header-total">Price</div>
            <div class="header-buy">Buy</div>
        </div>
        <div class="products">
            <Product v-for="product in filteredList" v-bind:key="product.id" v-bind:product="product" />
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import Product from '../Product.vue';
export default {
    name: 'MainContent',
    components: {Product},
    computed: {
      ...mapState({
        allMedicines: state => state.products.medicines,
        searchFilter: state => state.filter.search
      }),
      filteredList(){
        return this.allMedicines.filter(medicine => {
          return medicine.name.toLowerCase().includes(this.searchFilter.toLowerCase());
        })
      }
    },
    created() {
        this.$store.dispatch('getAllMedicines', 'getFilter');
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