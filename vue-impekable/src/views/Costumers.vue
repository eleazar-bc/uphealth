<template>
    <div class="home-wrapper">
        <div class="home-title">
          <h1>Costumers</h1>
          <div class="content-search">
            <img src="images/icon_search.png" alt="">
            <input type="text" placeholder="Search Name">
          </div>
        </div>

        <div class="home-content">
          <div class="costumers">
              <Costumer v-for="costumer in costumers" v-bind:key="costumer.name" v-bind:costumer="costumer" />
          </div>
        </div>

        <div class="pages">
          <ul>
            <li><img src="images/previous.png" alt=""></li>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li><img src="images/next.png" alt=""></li>
          </ul>
        </div>
    </div>
</template>

<script>
import Costumer from '../components/Costumer.vue';

export default {
  name: 'Home',
  components: {
    Costumer
  },
  data() {
    return {
      costumers: [{
        src: 'images/avatar1.png',
        name: 'Miro Kirov',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      },{
        src: 'images/avatar2.png',
        name: 'Nick Herasimenka',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      },{
        src: 'images/avatar3.png',
        name: 'Glev Kuznetsov',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      },{
        src: 'images/avatar4.png',
        name: 'Tony Stark',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      },{
        src: 'images/avatar5.png',
        name: 'Valentin Salmon',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      },{
        src: 'images/avatar6.png',
        name: 'Andrey Prokopenko',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      },{
        src: 'images/avatar7.png',
        name: 'Bessie Berry',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      },{
        src: 'images/avatar8.png',
        name: 'David James',
        address: 'United States',
        contact: 'Mobile : 871.567.4877'
      }]
    };
  }
}
</script>

<style scoped>
.home-wrapper {
  margin: 1em 5vw;
}

.home-wrapper .home-title {
  flex-wrap: wrap;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;

}

.content-search {
  height: 45px;
  font-size: 0.8125rem;
  line-height: 20px;
  width: 49%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: #ffffff;
  padding: 0 1em;
}

.content-search input{
  height: 100%;
  width: 100%;
  border: none;
}

.content-search img {
  margin-right: 1em;
}

.home-wrapper .home-title h1{
  font-weight: 400;
  font-size: 1.75rem;
  line-height: .40em;
  margin: 1em 0;
}

.home-wrapper .home-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.costumers {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.pages ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
      -ms-flex-pack: end;
          justify-content: flex-end;
}

.pages ul li {
  list-style: none;
  margin-left: 1em;
  height: 35px;
  width: 35px;
  background-color: #FFFFFF;
  border: 1px solid #E8E9EC;
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.pages ul li:hover {
  cursor: pointer;
  background-color: #3B86FF;
  color: #ffffff;
}

@media (max-width: 1024px) {
  .home-wrapper {
    margin: 1em;
  }
}

@media (max-width: 768px) {
  .home .home-wrapper .home-content {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }

  .content-search{
    width: 100%;
    margin-bottom: 1em;
  }
}
</style>