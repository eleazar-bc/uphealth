<template>
    <div class="add-item-container container">
        <div @click="showInputGroup = !showInputGroup; clearMessage()" class="title-container">
            <div class="title">Add new product</div>
            <div class="showHide">
                <img v-if="showInputGroup" src="images/icon_up-arrow-small.png" alt />
                <img v-if="!showInputGroup" src="images/small-down.png" alt />
            </div>
        </div>
        <div v-if="showInputGroup" class="input-group animated fadeIn">
            <input
                v-on:keyup.enter="$event.target.nextElementSibling.focus()"
                class="new-input"
                v-for="label in labels"
                @click="clearMessage"
                v-model="newItem[label.value]"
                v-bind:key="label.value"
                v-bind:type="label.type"
                v-bind:placeholder="label.placeholder"
            />
            <div class="lower-container">
                <div class="message" @click="showInputGroup = !showInputGroup; clearMessage()">
                    <p class="green animated bounceIn" v-if="status.text ==='success'">
                        You've added
                        <span class="added-item">{{status.latest}}</span> to your inventory. (Click to minimize)
                    </p>
                </div>
                <div class="action-buttons">
                    <div v-if="isNameValid" @click="onSave" class="button">Save</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "AddItem",
    data() {
        return {
            showInputGroup: false,
            newItem: {},
            labels: [
                {
                    value: 'name',
                    placeholder: 'Product Name',
                    type: 'text'
                },
                {
                    value: 'brand',
                    placeholder: 'Brand (Generic / Branded)',
                    type: 'text'
                },
                {
                    value: 'dosage',
                    placeholder: 'Dosage',
                    type: 'text'
                },
                {
                    value: 'type',
                    placeholder: 'Type (Capsule / Tablet)',
                    type: 'text'
                },
                {
                    value: 'stock',
                    placeholder: 'Stock Available',
                    type: 'number'
                },
                {
                    value: 'price',
                    placeholder: 'Price',
                    type: 'number'
                }
            ],
            status: {
                text: "no action",
                latest:  ''
            }
        };
    },
    methods: {
        ...mapActions(["addItem"]),
        onSave() {
            this.newItem.stock = (this.newItem.stock  ? this.newItem.stock : 0);
            this.newItem.price= (this.newItem.price ? this.newItem.price : 0);
            this.addItem(this.newItem);
            this.status.latest = this.newItem.name;
            this.newItem = {};
            this.status.text = "success";
        },
        clearMessage() {
            this.status.text = "";
        }
    },
    computed: {
        isNameValid() {
            return this.newItem.name != undefined && this.newItem.name.length > 0;
        }
    }
};
</script>

<style scope>
.add-item-container {
    padding: 1em;
    display: flex;
    flex-direction: column;
}
.title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.input-group {
    display: flex;
    flex-direction: column;
    margin-top: 1em;
}
.input-group input.new-input {
    margin: 0.3em 2em;
    height: 32px;
    border: none;
    border-bottom: 2px solid #e9e9f0;
    letter-spacing: 1px;
}
.input-group input:focus {
    border-bottom: 2px solid #3b86ff;
}
.lower-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.action-buttons {
    margin-top: 1em;
    display: flex;
    justify-content: flex-end;
}
.message {
    text-align: center;
    cursor: pointer;
}
.message .added-item {
    text-transform: uppercase;
    font-weight: 700;
    padding: 0 0.3em;
    letter-spacing: 1px;
}
.button {
    margin-left: 1em;
    height: 42px;
    width: 100px;
    background-color: #ffffff;
    border: 1px solid #e8e9ec;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
.button:hover {
    background-color: #3b86ff;
    color: #ffffff;
}
.success-color {
    color: #4ad991;
}
.fail-color {
    color: #ff7285;
}
</style>