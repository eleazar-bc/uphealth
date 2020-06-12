<template>
    <div class="logo-container">
        <router-link to="/" tag="h1" class="logo">Uphealth</router-link>
    </div>
</template>

<script>
export default {
    name: "Logo"
};
</script>

<style scoped>
.logo-container {
    height: 70px;
    background-color: #3c3b54;
    margin-bottom: 0.2em;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    width: 100%;
}

.logo-container h1 {
    font-weight: 700;
    font-size: 0.9375rem;
    line-height: 21px;
    letter-spacing: 0.2rem;
    padding-left: 5%;
    text-transform: uppercase;
}

.logo-container h1:hover {
    cursor: pointer;
}

.main-nav ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: distribute;
    justify-content: space-around;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

@media (max-width: 768px) {
    h1 {
        display: none;
    }
}
</style>