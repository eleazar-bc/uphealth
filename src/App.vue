<template>
    <div id="app">
        <link rel="text/stylesheet" href="animate.min.css" />
        <TheSidebar />
        <div class="main-container">
            <TheHeader />
            <router-view />
        </div>
    </div>
</template>

<script>
import TheSidebar from "./components/layout/TheSidebar.vue";
import TheHeader from "./components/layout/TheHeader.vue";

import "animate.css";

export default {
    name: "App",
    components: {
        TheSidebar,
        TheHeader
    },
    created() {
        this.$store.dispatch('setMedicines', 'createdAt');
    }
};
</script>

<style>
*,
*::before,
*::after {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

html {
    padding: 0;
    margin: 0;
    font-family: "Source Sans Pro", sans-serif;
    font-weight: 400;
    color: #4d4f5c;
    background-color: #f0f0f7;

    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

html body #app {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0;
}

html body ul {
    margin: 0;
    padding: 0;
}

html body a {
    color: inherit;
    text-decoration: none;
}

html body .container {
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.4);
    background-color: #ffffff;
}

html body p.blue {
    color: #56d9fe;
}

html body p.purple {
    color: #a3a0fb;
}

html body p.green {
    color: #4ad991;
}

html body .background-green {
    background-color: #69e4a6;
}

html body .background-red {
    background-color: #ff7285;
}

html body .background-orange {
    background-color: #ffca83;
}

.main-container {
    width: 80vw;
}

.main-container .component-container {
    margin: 1em 1vw;
}

@media (max-width: 1024px) {
    .component-container {
        margin: 1em;
    }
}

@media (max-width: 768px) {
    .main-container {
        width: 90vw;
    }
    .component-container .content-container {
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
    }
}
</style>
