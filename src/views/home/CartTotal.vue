<template>
    <div class="card container">
        <img src="images/Card Icon 2.png" />
        <div class="card-content">
            <p class="value" v-bind:class="content.color">&#8369; {{content}}</p>
            <p class="description">Total</p>
        </div>
        <div
            v-if="cartItems.length > 0"
            @click="showDropdown = !showDropdown, animate = !animate"
            class="card-menu"
        >
            <img src="images/menu-icon.png" alt />
            <CartMenu v-bind:class="{showDropdown, 'animated flipInX animation-settings':animate}" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartMenu from "./CartMenu.vue";

export default {
    name: "CartTotal",
    components: { CartMenu },
    props: ["content"],
    computed: mapGetters(["cartItems"]),
    data() {
        return {
            showDropdown: false,
            animate: false
        };
    }
};
</script>

<style>
.card {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0.5em 1em;
    margin: 0 0 1em 0;
}

.card img {
    margin-right: 1em;
}

.card .card-content {
    width: 100%;
}

.card .card-content p {
    line-height: 0.3em;
}

.card .card-content p.value {
    font-size: 1.125rem;
    line-height: 0.13em;
}

.card .card-content p.description {
    font-size: 0.8125rem;
    line-height: 1em;
}

.card .card-menu {
    position: relative;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card .card-menu:hover {
    cursor: pointer;
}
.animation-settings {
    animation-duration: 500ms;
}
</style>