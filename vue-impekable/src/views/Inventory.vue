<template>
    <div class="component-container">
        <AddItem />

        <div class="inventory-container">
            <div class="title">Inventory</div>
            <div class="inventory">
                <InventoryItem v-for="product in products" v-bind:key="product.id" v-bind:product="product"/>
            </div>
        </div>
    </div>
</template>

<script>
import AddItem from '../components/AddItem';
import InventoryItem from '../components/InventoryItem';

export default {
    name: "Inventory",
    components: {
        AddItem,
        InventoryItem
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    name: "amoxicillin",
                    brand: "generic",
                    dosage: "500mg",
                    type: "capsule",
                    price: 25,
                    stock: 100
                },
                {
                    id: 2,
                    name: "potencee",
                    brand: "branded",
                    dosage: "500mg",
                    type: "",
                    price: 10,
                    stock: 9
                },
                {
                    id: 3,
                    name: "decolgen forte",
                    brand: "branded",
                    dosage: "",
                    type: "",
                    price: 68,
                    stock: 0
                },
                {
                    id: 4,
                    name: "omeprazole",
                    brand: "generic",
                    dosage: "20mg",
                    type: "",
                    price: 24,
                    stock: 5
                },
                {
                    id: 5,
                    name: "paracetamol",
                    brand: "generic",
                    dosage: "500mg",
                    type: "tab",
                    price: 8,
                    stock: 13
                },
                {
                    id: 6,
                    name: "losartan",
                    brand: "generic",
                    dosage: "500mg",
                    type: "",
                    price: 13,
                    stock: 15
                }
            ]
        };
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
    justify-content: space-between;
    flex-wrap: wrap;
}


@media (max-width: 768px) {

}
</style>