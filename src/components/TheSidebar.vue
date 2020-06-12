<template>
    <div class="sidebar">
        <TheLogo />
        <TheNavigation />
    </div>
</template>

<script>
import TheLogo from "./TheLogo.vue";
import TheNavigation from "./TheNavigation.vue";
export default {
    name: "TheSidebar",
    components: {
        TheLogo,
        TheNavigation
    }
};
</script>

<style>
.sidebar {
    color: #ffffff;
    background-color: #43425d;
    width: 15vw;
    min-width: 160px;
}
@media (max-width: 768px) {
    .sidebar {
        width: 10vw;
        min-width: 10vw;
    }
}
</style>