<template>
<div class="search">
    <img src="images/icon_search.png" alt="">
    <input @input="updateFilter($event.target.value)" type="text" placeholder="Search...">
</div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'Search',
    methods: mapActions(['updateFilter'])
}
</script>

<style>
.search {
  width: 60vw;
  height: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.search input {
  height: 90%;
  width: 90%;
  border: none;
  background-color: #FFFFFF;
  margin-left: 1em;
  color: #4D4F5C;
  font-size: 0.8125rem;
  line-height: .20em;
}
</style>