<template>
  <div class="home">
    <header class="container">
        <Search />
        <Notifications />
        <User />
    </header>
    <div class="home-wrapper">
        <div class="home-title">Products</div>
        <Cards />
        <div class="home-content">
          <MainContent />
          <SideContent />
        </div>
    </div>
  </div>
</template>

<script>
import Search from '../components/Search.vue';
import Notifications from '../components/Notifications.vue';
import User from '../components/User.vue';

import Cards from '../components/Cards.vue';
import MainContent from '../components/MainContent.vue';
import SideContent from '../components/SideContent.vue';

export default {
  name: 'Home',
  components: {
    Search,
    Notifications,
    User,
    Cards,
    MainContent,
    SideContent
  }
}
</script>

<style scoped>
.home header {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  width: 80vw;
  height: 70px;
  padding: 1em;
}

.home .home-wrapper {
  margin: 1em 5vw;
}

.home .home-wrapper .home-title {
  font-size: 1.75rem;
  line-height: .40em;
  margin: 1em 0;
}

.home .home-wrapper .home-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}


@media (max-width: 1024px) {
  .home .home-wrapper {
    margin: 1em;
  }
  .home header .user .username {
    display: none;
  }
}

@media (max-width: 768px) {
  .home {
    width: 90vw;
  }
  .home header {
    width: 90vw;
  }
  .home .home-wrapper .home-content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}
</style>