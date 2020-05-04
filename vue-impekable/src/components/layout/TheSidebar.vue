<template>
  <div class="sidebar">
      <TheLogo />
      <Navigation />
    </div>
</template>

<script>
import TheLogo from '../../components/TheLogo'
import Navigation from '../../components/layout/Navigation.vue';
export default {
    name: 'TheSidebar',
    components: {
        TheLogo,
        Navigation
    }
}
</script>

<style>
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
}
</style>