<template>
  <router-link v-bind:to="menu.url" tag="li">
    <img v-bind:src="menu.src" alt="">
    <span>{{menu.title}}</span>
    <!-- <p>{{menu.title}}</p> -->
  </router-link>
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['menu']
}
</script>

<style scoped>
li {
  height: 53px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding-left: 1.5vw;
  margin-bottom: .1em;
  border-left: 5px solid #43425D;
}

li:hover {
  cursor: pointer;
}

li img {
  margin-right: 1em;
}

li:hover {
  background-color: #3C3B54;
  border-left: 5px solid #A3A0FB;
}

li.router-link-active {
  background-color: #3C3B54;
  border-left: 5px solid #A3A0FB;
}

@media (max-width: 768px) {

  li span {
    display: none;
  }
}
</style>