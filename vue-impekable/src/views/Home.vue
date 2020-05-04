<template>
    <div class="home-wrapper">
        <div class="home-content">
          <MainContent />
          <SideContent />
        </div>
    </div>
</template>

<script>
import MainContent from '../components/layout/MainContent.vue';
import SideContent from '../components/layout/SideContent.vue';

export default {
  name: 'Home',
  components: {
    MainContent,
    SideContent
  }
}
</script>

<style scoped>
.home-wrapper {
  margin: 1em 1vw;
}
.home-wrapper .home-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
@media (max-width: 1024px) {
  .home-wrapper {
    margin: 1em;
  }
}

@media (max-width: 768px) {
  .home-wrapper .home-content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
}
</style>