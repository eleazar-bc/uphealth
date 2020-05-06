<template>
    <div class="inventory-item-container container">
        <div class="upper-buttons-container">
            <div class="update-buttons">
                <img
                    @click="onSave"
                    v-if="showSaveButton"
                    class="save-button"
                    src="images/check_icon.png"
                    alt=""
                />
                <img
                    @click="onCancel"
                    class="cancel-button"
                    src="images/close.png" alt=""
                    v-if="showSaveButton"
                >
                <span
                    class="green-text"
                    v-if="showSaveMessage"
                >Updated</span>
            </div>
            <img @click="confirmDelete" class="delete-button" src="images/Icon Trash.png" alt />
        </div>
        <EditableInput
            class="item-title-container"
            @updated="handleUpdate"
            v-bind:item="name"
            v-bind:saveFlag="saveFlag"
            v-bind:cancelFlag="cancelFlag"
        />
        <EditableInput
            class="input-group"
            v-for="detail in item"
            v-bind:key="detail.name"
            @updated="handleUpdate"
            v-bind:item="detail"
            v-bind:saveFlag="saveFlag"
            v-bind:cancelFlag="cancelFlag"
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
            this.showSaveMessage = false;
            this.product[label] = value;
        },
        onSave() {
            this.updateItem(this.product);
            this.showSaveButton = false;
            this.saveFlag = !this.saveFlag;
            this.showSaveMessage = true;
        },
        onCancel() {
            this.cancelFlag = !this.cancelFlag;
            this.showSaveButton = false;
        },
        confirmDelete() {
            if (confirm("Are you sure?")) {
                this.deleteItem(this.product.id);
            }
        }
    },
    data() {
        return {
            defaultProp: {},
            saveFlag: false,
            cancelFlag: false,
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
            showSaveButton: false,
            showSaveMessage: false
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
.update-buttons {
    display: flex;
    align-items: center;
}
.upper-buttons-container img {
    height: 32px;
    padding: 9px;
    cursor: pointer;
}
.save-button {
    margin-right: 1em;
}
.item-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.green-text {
    color: #4ad991;
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