<template>
    <div class="inventory-item-container container">
        <div class="item-title-container">
            <input type="text" v-bind:model="product.name" v-bind:value="product.name" />
            <div class="input-label">product name</div>
        </div>
        <div class="item-detail-container">
            <div class="input-group">
                <input type="text" v-bind:model="product.brand" v-bind:value="product.brand"/>
                <div class="input-label">brand</div>
            </div>
            <div class="input-group">
                <input type="text" v-bind:model="product.dosage" v-bind:value="product.dosage" />
                <div class="input-label">dosage</div>
            </div>
            <div class="input-group">
                <input type="text" v-bind:model="product.type" v-bind:value="product.type" />
                <div class="input-label">type</div>
            </div>
            <div class="input-group">
                <input type="text" v-bind:model="product.stock" v-bind:value="product.stock" />
                <div class="input-label">stock</div>
            </div>
            <div class="input-group">
                <input type="text" v-bind:model="product.price" v-bind:value="product.price" />
                <div class="input-label">price</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "InventoryItem",
    props: ["product"]
};
</script>

<style scoped>
.inventory-item-container {
    padding: 1em;
    display: flex;
    flex-direction: column;
    width: 49%;
    margin-bottom: 1.5em;
}
.item-title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.item-title-container input {
    text-align:  center;
    height: 32px;
}
.input-label {
    opacity: .5;
    font-size: 0.8125rem;
    align-self: center;
}
.item-detail-container {
  display: flex;
  flex-direction: column;
}
input[type="text"] {
    border: none;
    border-bottom: 2px solid #e9e9f0;
    letter-spacing: 1px;
}
input[type="text"]:focus {
  border-bottom: 2px solid #3B86FF;
}
@media (max-width: 768px) {
.inventory-item-container {
    width: 90%;
}
}
</style>