<template>
    <header class="header-container container">
        <TheSearchBar />
        <TheUser />
    </header>
</template>

<script>
import TheSearchBar from "./TheSearchBar.vue";
import TheUser from "./TheUser.vue";

export default {
    name: "TheHeader",
    components: {
        TheSearchBar,
        TheUser
    }
};
</script>

<style scoped>
.header-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    height: 70px;
    padding: 1em;
}
@media (max-width: 768px) {
    .header-container {
        width: 84vw;
    }
}
</style>