<template>
    <div class="component-container">
        <div class="content-container">
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
.component-container .content-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
</style>