<template>
  <div id="app">
    <div class="sidebar">
      <Logo />
      <Navigation />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Logo from './components/Logo.vue';
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Logo,
    Navigation
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

html body span.text-opacity {
  opacity: .5;
}

.sidebar {
  color: #FFFFFF;
  background-color: #43425D;
  width: 20vw;
  min-width: 160px;
}

@media (max-width: 768px) {
  .sidebar {
    width: 10vw;
    min-width: 10vw;
  }
  .sidebar .logo-container h1 {
    display: none;
  }
  .sidebar .main-nav ul li a {
    display: none;
  }
}
</style>
