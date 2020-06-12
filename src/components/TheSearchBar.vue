<template>
    <div class="search">
        <img src="images/icon_search.png" alt />
        <input
            @input="updateFilter($event.target.value)"
            v-bind:value="getFilter"
            type="text"
            placeholder="Search..."
        />
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    name: "TheSearchBar",
    methods: {
        ...mapActions(["updateFilter"])
    },
    computed: {
        ...mapGetters(["getFilter"])
    }
};
</script>

<style>
.search {
    width: 60vw;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.search input {
    height: 90%;
    width: 90%;
    border: none;
    background-color: #ffffff;
    margin-left: 1em;
    color: #4d4f5c;
    font-size: 0.8125rem;
    line-height: 0.2em;
}
</style>