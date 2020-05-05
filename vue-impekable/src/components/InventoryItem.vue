<template>
    <div class="inventory-item-container container">
        <div class="upper-buttons-container">
            <img
                @click="onSave"
                v-bind:class="{'hide-me': !showSaveButton}"
                class="save-button"
                src="images/check_icon.png"
                alt
            />
            <img @click="confirmDelete" class="delete-button" src="images/close.png" alt />
        </div>
        <EditableInput
            class="item-title-container"
            @updated="handleUpdate"
            v-bind:item="name"
            v-bind:save="save"
        />
        <EditableInput
            class="input-group"
            v-for="detail in item"
            v-bind:key="detail.name"
            @updated="handleUpdate"
            v-bind:item="detail"
            v-bind:save="save"
        />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import EditableInput from "./EditableInput";

export default {
    name: "InventoryItem",
    components: { EditableInput },
    props: ["product"],
    methods: {
        ...mapActions(["deleteItem", "updateItem"]),
        handleUpdate({label, value}) {
            this.showSaveButton = true;
            this.product[label] = value;
        },
        onSave() {
            this.updateItem(this.product);
            this.showSaveButton = false;
            this.save = !this.save;
        },
        confirmDelete() {
            if (confirm("Are you sure?")) {
                this.deleteItem(this.product.id);
            }
        }
    },
    data() {
        return {
            save: false,
            name: {
                label: "name",
                value: this.product.name,
                titleStyle: true
            },
            item: [
                {
                    label: "brand",
                    value: this.product.brand
                },
                {
                    label: "dosage",
                    value: this.product.dosage
                },
                {
                    label: "type",
                    value: this.product.type
                },
                {
                    label: "stock",
                    value: this.product.stock
                },
                {
                    label: "price",
                    value: this.product.price
                }
            ],
            showSaveButton: false
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