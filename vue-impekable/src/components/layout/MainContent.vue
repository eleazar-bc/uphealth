<template>
    <div class="main-container container">
        <div class="header-container">
            <div class="header-name">Product</div>
            <div>Availability</div>
            <div>Price</div>
            <div class="header-buy">Buy</div>
        </div>
        <div class="content">
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

<style scoped>
.main-container {
  width: 66%;
  padding: 1em;
}

.main-container .header-container {
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

.main-container .header-container .header-name {
  width: 40%;
}

.main-container .header-container .header-buy {
  width: 38px;
}

.main-container .content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  padding: 0 1em;
}

@media (max-width: 768px) {
  .main-container {
    width: 100%;
    margin-bottom: 1em;
  }
}
</style>