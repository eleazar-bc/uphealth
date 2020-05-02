<template>
<div class="cards">
    <CardItem v-for="content in cards" v-bind:key="content.description" v-bind:content="content" />
</div>
</template>

<script>
import CardItem from '../components/CardItem.vue';

export default {
    name: 'Cards',
    components: {CardItem},
    data() {
    return {
      cards: [{
        src: 'images/Card Icon 1.png',
        value: '$50,000',
        color: 'blue',
        description: 'Total Revenue'
      }, {
        src: 'images/Card Icon 2.png',
        value: '$1,250',
        color: 'purple',
        description: 'Total Revenue'
      }, {
        src: 'images/Icon.png',
        value: '+2.0%',
        color: 'green',
        description: 'Growth'
      }
      ]
    }
  }
}
</script>

<style>
.cards {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;

  margin: 1em auto;
}

@media (max-width: 768px) {
  .cards {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .cards .card {
    width: 100%;
  }
}
</style>