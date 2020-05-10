<template>
    <div class="inventory-item-container container" v-bind:class="{'animated rollOut': animateMe}">
        <div class="upper-buttons-container">
            <div class="update-buttons">
                <img src="images/check_icon.png" alt=""
                    @click="onSave"
                    v-if="showSaveButton"
                    class="save-button"
                />
                <img src="images/close.png" alt=""
                    @click="onCancel"
                    v-if="showSaveButton"
                    class="cancel-button"
                />
                <span class="green-text" v-if="showSaveMessage">Updated</span>
            </div>
            <img @click="confirmDelete" class="delete-button" src="images/Icon Trash.png" alt />
        </div>
        <EditableInput
            v-for="detail in item"
            v-bind:key="detail.label"
            v-bind:class="detail.class"
            v-bind:item="detail"
            v-bind:flags="flags"
            @updated="handleUpdate"
        />
    </div>
</template>

<script>
import { mapActions } from "vuex";
import EditableInput from "./EditableInput";
import {getInputOptions} from '../../utils/productUtils'

export default {
    name: "InventoryItem",
    components: { EditableInput },
    props: ["product"],
    methods: {
        ...mapActions(["deleteItem", "updateItem", "deleteSales"]),
        handleUpdate({label, value}) {
            this.showSaveButton = true;
            this.showSaveMessage = false;
            this.product[label] = value;
        },
        onSave() {
            this.updateItem(this.product);
            this.showSaveButton = false;
            this.flags.save = !this.flags.save;
            this.showSaveMessage = true;
        },
        onCancel() {
            this.flags.cancel = !this.flags.cancel;
            this.showSaveButton = false;
        },
        confirmDelete() {
            if (confirm("Are you sure?")) {
                this.animateMe = true;
                this.deleteItem(this.product.id);
                this.deleteSales(this.product.id);
            }
        }
    },
    data() {
        return {
            animateMe: false,
            defaultProp: {},
            flags: {
                save: false,
                cancel: false
            },
            item: getInputOptions({
                name: this.product.name,
                brand: this.product.brand,
                dosage: this.product.dosage,
                type: this.product.type,
                stock: this.product.stock,
                price: this.product.price
            }),
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