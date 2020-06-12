<template>
    <div class="component-container">
        <AddItem />
        <div class="inventory-container">
            <div class="title">Inventory</div>
            <transition-group name="inventory" class="inventory" tag="div">
                <InventoryItem
                    v-for="product in filteredList"
                    v-bind:key="product.id"
                    v-bind:product="product"
                />
            </transition-group>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import AddItem from "../views/inventory/AddItem";
import InventoryItem from "../views/inventory/InventoryItem";

export default {
    name: "Inventory",
    components: {
        AddItem,
        InventoryItem
    },
    computed: {
        ...mapState({
            allMedicines: state => state.products.medicines,
            searchFilter: state => state.filter.search
        }),
        filteredList() {
            return this.allMedicines.filter(medicine => {
                return medicine.name
                    .toLowerCase()
                    .includes(this.searchFilter.toLowerCase());
            });
        }
    },
    created() {
        this.$store.dispatch("clearFilter");
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

.inventory-enter,
.inventory-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.inventory-leave-active {
    position: absolute;
}

.inventory-move {
    transition: transform 500ms;
}

@media (max-width: 768px) {
}
</style>