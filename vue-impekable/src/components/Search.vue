<template>
<div class="search">
    <img src="images/icon_search.png" alt="">
    <input type="text" placeholder="Search...">
</div>
</template>

<script>
export default {
    name: 'Search'
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