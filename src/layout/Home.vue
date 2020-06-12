<template>
    <div class="component-container">
        <div class="content-container">
            <HomeContent />
            <SideContent />
        </div>
    </div>
</template>

<script>
import HomeContent from "../views/home/HomeContent.vue";
import SideContent from "../views/home/SideContent.vue";

export default {
    name: "Home",
    components: {
        HomeContent,
        SideContent
    }
};
</script>

<style scoped>
.component-container .content-container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
</style>