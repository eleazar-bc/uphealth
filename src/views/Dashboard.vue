<template>
    <div class="component-container">
        <AddItem />

        <div class="title">
            <h1>Inventory</h1>
            <div class="content-search">
                <img src="images/icon_search.png" alt />
                <input type="text" placeholder="Search Name" />
            </div>
        </div>

        <div class="inventories">

            <div class="cards">
                <Card v-for="product in products" v-bind:key="product.id" v-bind:product="product" />
            </div>
        </div>
    </div>
</template>

<script>
import AddItem from '../components/AddItem';
import Card from '../components/Card';

export default {
    name: "Inventory",
    components: {
        AddItem,
        Card
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
.component-container .title {
    flex-wrap: wrap;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.content-search {
    height: 45px;
    font-size: 0.8125rem;
    line-height: 20px;
    width: 49%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background-color: #ffffff;
    padding: 0 1em;
}

.content-search input {
    height: 100%;
    width: 100%;
    border: none;
}

.content-search img {
    margin-right: 1em;
}

.component-container .title h1 {
    font-weight: 400;
    font-size: 1.75rem;
    line-height: 0.4em;
    margin: 1em 0;
}

.component-container .inventories {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.cards {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    width: 100%;
}

.pages ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}

.pages ul li {
    list-style: none;
    margin-left: 1em;
    height: 35px;
    width: 35px;
    background-color: #ffffff;
    border: 1px solid #e8e9ec;
    border-radius: 5px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.pages ul li:hover {
    cursor: pointer;
    background-color: #3b86ff;
    color: #ffffff;
}

@media (max-width: 768px) {
    .content-search {
        width: 100%;
        margin-bottom: 1em;
    }
}
</style>