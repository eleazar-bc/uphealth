<template>
    <div class="component-container">
        <AddItem />
        <div class="inventory-container">
            <div class="title">Inventory</div>
            <div class="inventory">
                <InventoryItem v-for="product in allMedicines" v-bind:key="product.id" v-bind:product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import AddItem from '../components/AddItem';
import InventoryItem from '../components/InventoryItem';

export default {
    name: "Inventory",
    components: {
        AddItem,
        InventoryItem
    },
    computed: {
      ...mapState({
        allMedicines: state => state.products.medicines
      })
    },
    created() {
        this.$store.dispatch('getAllMedicines');
    }
};
</script>

<style scoped>
.inventory-container {
    margin-top: 1em;
    padding: 1em;
}
.inventory-container .title {
    height: 45px;
    font-size: 1.125rem;
    line-height: 13px;
    display: flex;
    align-items: center;
    padding-left: 1em;
}
.inventory {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}


@media (max-width: 768px) {

}
</style>