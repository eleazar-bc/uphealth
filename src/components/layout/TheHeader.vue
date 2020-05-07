<template>
    <header class="header-container container">
        <Search />
        <User />
    </header>
</template>

<script>
import Search from '../../components/Search.vue';
import User from '../../components/User.vue';

export default {
    name: 'TheHeader',
    components: {
        Search,
        User
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
        width: 90vw;
    }
}
</style>