<template>
    <li v-bind:class="{'active' : menu.isActive}">
        <img v-bind:src="menu.src" alt="">
        <a href="#">{{menu.title}}</a>
    </li>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
</template>

<script>
export default {
    name: 'MenuItem',
    props: ['menu']
}
</script>

<style>
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

li.active {
  background-color: #3C3B54;
  border-left: 5px solid #A3A0FB;
}
</style>