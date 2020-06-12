<template>
    <div class="product-container">
        <div class="product-info">
            <div class="product-name">{{product.name}}</div>
            <div class="product-description">brand: {{product.brand}}</div>
            <div class="product-description">dosage: {{product.dosage}}</div>
            <div class="product-description">type: {{product.type}}</div>
        </div>
        <div class="product-availability" v-bind:class="availabilityBGColor">{{product.stock}}</div>
        <div>&#8369; {{product.price}}</div>
        <div
            @click="addToCart(product), animate=true"
            v-bind:class="[buyButton.class, {'animated rollOut animation-settings': animate && buyButton.class == 'available'}]"
            @animationend="animate = false"
        >
            <img v-bind:src="buyButton.src" alt />
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "ProductItem",
    props: ["product"],
    methods: {
        ...mapActions(["addToCart"])
    },
    data() {
        return {
            animate: false
        };
    },
    computed: {
        buyButton() {
            if (this.product.stock == 0) {
                return {
                    class: "not-available",
                    src: "images/out of stock icon.png"
                };
            }
            return {
                class: "available",
                src: "images/Card Icon 1.png"
            };
        },
        availabilityBGColor() {
            if (this.product.stock == 0) {
                return "background-red";
            }
            if (this.product.stock <= 10) {
                return "background-orange";
            }
            return "background-green";
        }
    }
};
</script>

<style scoped>
.product-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    min-height: 82px;
    font-size: 0.8125rem;
    border-bottom: 1px solid #f1f1f3;
    padding: 1em 0;
}

.product-container .product-info {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: centflex-starter;
    -ms-flex-align: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 40%;
}

.product-container .product-info .product-name {
    line-height: 30px;
    text-transform: capitalize;
    font-size: 1rem;
    opacity: 100;
}

.product-container .product-info .product-description {
    opacity: 0.5;
}

.product-container .product-availability {
    border-radius: 14px;
    width: 90px;
    height: 24px;
    font-size: 0.6875rem;
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

.product-container .available:hover {
    cursor: pointer;
}
.animation-settings {
    animation-duration: 100ms;
}
</style>