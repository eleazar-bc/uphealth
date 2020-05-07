<template>
    <div class="card-item container">

        <div class="info-container">
            <div class="info-name">
                <span v-if="!edit">{{product.name}}</span>
                <input v-if="edit" type="text" v-model="product.name" />
            </div>
            <div class="info-item">
                brand:
                <span v-if="!edit">{{product.brand}}</span>
                <input v-if="edit" type="text" v-model="product.brand" />
            </div>
            <div class="info-item">
                dosage:
                <span v-if="!edit">{{product.dosage}}</span>
                <input v-if="edit" type="text" v-model="product.dosage" />
            </div>
            <div class="info-item">
                type:
                <span v-if="!edit">{{product.type}}</span>
                <input v-if="edit" type="text" v-model="product.type" />
            </div>
            <div class="info-item">
                price(&#8369;):
                <span v-if="!edit">{{product.price}}</span>
                <input v-if="edit" type="text" v-model="product.price" />
            </div>
            <div class="info-item">
                stock:
                <span v-if="!edit">{{product.stock}}</span>
                <input v-if="edit" type="text" v-model="product.stock" />
            </div>

            <div class="buttons">
            <img class="edit-button" src="images/edit.png" alt="">
            <img class="close-button" src="images/close.png" alt="">
        </div>
        </div>
        <div class="action-buttons">
            <div @click="edit = true" class="action-button">Edit</div>
            <div class="action-button">Delete</div>
            <div @click="edit = false" class="action-button">Cancel</div>
            <div class="action-button">Save</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["product"],
    components: {},
    data() {
        return {
            edit: false,
            saveButtonText: "Save",
            cancelButtonText: "Cancel"
        };
    }
};
</script>

<style scoped>
.card-item {
    width: 32%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin-bottom: 1em;
}
.info-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    padding: 1.2em;
    height: 80%;

}
.info-name {
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 20px;
    padding-bottom: 0.5em;
    text-align: center;
}

.info-item {
    font-size: 0.9375rem;
    line-height: 25px;
    opacity: 50%;
    display: flex;
    /* justify-content: space-between; */
}

.buttons {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    width: 20%;
}

.action-buttons {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 20%;
}

.action-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #e8e9ec;
    border-radius: 5px;
    width: 20%;
    height: 70%;
    margin: 1em 0;
}
.action-button:hover {
    cursor: pointer;
    background-color: #3b86ff;
    color: #ffffff;
}

input[type="text"] {
    height: 32px;
    padding: 1em;
    letter-spacing: 0.1em;
    border: 1px solid #e8e9ec;
}

@media (max-width: 768px) {
    .card-item {
        width: 100%;
    }
}
</style>