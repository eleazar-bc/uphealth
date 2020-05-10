<template>
    <div class="dropdown container">
        <ul>
            <li>Pay</li>
            <li @click="handleCheckout">Done</li>
            <li @click="clearCart">Clear</li>
        </ul>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
export default {
    name: 'DropdownMenu',
    methods: {
        ...mapActions(['clearCart', 'checkout', 'updateSales']),
        handleCheckout() {
            if(confirm('Done with this transaction?')) {
                this.checkout(this.cartItems);
                this.updateSales(this.cartItems);
                this.clearCart();
            }
        }
    },
    computed: mapGetters(['cartItems'])
};
</script>

<style scoped>
.dropdown {
    position: absolute;
    right: 4em;
    top: -76px;
    visibility: hidden;
}
ul li {
    height: 4em;
    width: 10em;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #F1F1F3;
}
ul li:hover {
    cursor: pointer;
    background-color: #F0F0F7;
}
.showDropdown {
    visibility: visible;
}
</style>