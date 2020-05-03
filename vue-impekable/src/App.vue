<template>
  <div id="app">
    <link rel="text/stylesheet" href="animate.min.css">
    <div class="sidebar">
      <Logo />
      <Navigation />
    </div>

    <div class="home">
    <header class="container">
        <Search />
        <User />
    </header>
    <router-view/>
  </div>
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import Navigation from './components/layout/Navigation.vue';

import Search from './components/Search.vue';
import User from './components/User.vue';

import 'animate.css';

export default {
  name: 'App',
  components: {
    Logo,
    Navigation,
    Search,
    User
  }
}
</script>

<style>
*, *::before, *::after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

html {
  padding: 0;
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 400;
  color: #4D4F5C;
  background-color: #F0F0F7;
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
  background-color: #FFFFFF;
}

html body p.blue {
  color: #56D9FE;
}

html body p.purple {
  color: #A3A0FB;
}

html body p.green {
  color: #4AD991;
}

html body .background-green {
  background-color: #69E4A6;
}

html body .background-red {
  background-color: #FF7285;
}

html body .background-orange {
  background-color: #FFCA83;
}

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
  height: 70px;
  padding: 1em;
}

.sidebar {
  color: #FFFFFF;
  background-color: #43425D;
  height: 100vh;
  width: 20vw;
  min-width: 160px;
}

.home {
  width: 80vw;
}

@media (max-width: 768px) {
  .sidebar {
    width: 10vw;
    min-width: 10vw;
  }
  .home {
    width: 90vw;
  }
  .home header {
    width: 90vw;
  }
}
</style>
