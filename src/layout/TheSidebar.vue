<template>
  <div class="sidebar">
      <TheLogo />
      <TheNavigation />
    </div>
</template>

<script>
import TheLogo from '../components/TheLogo.vue'
import TheNavigation from '../layout/TheNavigation.vue';
export default {
    name: 'TheSidebar',
    components: {
        TheLogo,
        TheNavigation
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