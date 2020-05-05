<template>
    <div class="inventory-item-container container">
        <div class="upper-buttons-container">
            <img
                @click="updateItem(product)"
                v-bind:class="{'hide-me': !showSaveButton}"
                class="save-button"
                src="images/check_icon.png"
                alt
            />
            <img @click="confirmDelete" class="delete-button" src="images/close.png" alt />
        </div>
        <div class="item-title-container">
            <input
                @change="onChange.name = 'green-border', showSaveButton = true"
                type="text"
                v-model="product.name"
                v-bind:class="onChange.name"
            />
            <div class="input-label">product name</div>
        </div>
        <div class="item-detail-container">
            <div class="input-group">
                <input
                    @change="onChange.brand = 'green-border', showSaveButton = true"
                    type="text"
                    v-model="product.brand"
                    v-bind:class="onChange.brand"
                />
                <div class="input-label">brand</div>
            </div>
            <div class="input-group">
                <input
                    @change="onChange.dosage = 'green-border', showSaveButton = true"
                    type="text"
                    v-model="product.dosage"
                    v-bind:class="onChange.dosage"
                />
                <div class="input-label">dosage</div>
            </div>
            <div class="input-group">
                <input
                    @change="onChange.type = 'green-border', showSaveButton = true"
                    type="text"
                    v-model="product.type"
                    v-bind:class="onChange.type"
                />
                <div class="input-label">type</div>
            </div>
            <div class="input-group">
                <input
                    @change="onChange.stock = 'green-border', showSaveButton = true"
                    type="text"
                    v-model="product.stock"
                    v-bind:class="onChange.stock"
                />
                <div class="input-label">stock</div>
            </div>
            <div class="input-group">
                <input
                    @change="onChange.price = 'green-border', showSaveButton = true"
                    type="text"
                    v-model="product.price"
                    v-bind:class="onChange.price"
                />
                <div class="input-label">price</div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "InventoryItem",
    props: ["product"],
    methods: {
        ...mapActions(["deleteItem", "updateItem"]),
        onItemChange() {},
        confirmDelete() {
            if (confirm("Are you sure?")) {
                this.deleteItem(this.product.id);
            }
        }
    },
    data() {
        return {
            showSaveButton: false,
            onChange: {
                name: "grey-border",
                brand: "grey-border",
                dosage: "grey-border",
                type: "grey-border",
                stock: "grey-border",
                price: "grey-border"
            }
        };
    }
};
</script>

<style scoped>
.inventory-item-container {
    padding: 1em;
    display: flex;
    flex-direction: column;
    width: 32%;
    margin-bottom: 1.5em;
}
.upper-buttons-container {
    display: flex;
    justify-content: space-between;
}
.save-button,
.delete-button {
    height: 32px;
    width: 32px;
    padding: 9px;
    cursor: pointer;
}
.save-button {
    width: 38px;
}
.hide-me {
    visibility: hidden;
}

.item-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item-title-container input {
    text-align: center;
    height: 32px;
}
.input-label {
    opacity: 0.5;
    font-size: 0.8125rem;
    align-self: center;
}
.item-detail-container {
    display: flex;
    flex-direction: column;
}
input[type="text"] {
    border: none;
    letter-spacing: 1px;
}
input[type="text"]:focus {
    border-bottom: 2px solid #3b86ff;
}
input.grey-border {
    border-bottom: 2px solid #e9e9f0;
}
input.green-border {
    border-bottom: 2px solid #4ad991;
}
@media (max-width: 1024px) {
    .inventory-item-container {
        width: 49%;
    }
}
@media (max-width: 768px) {
    .inventory-item-container {
        width: 90%;
    }
}
</style>