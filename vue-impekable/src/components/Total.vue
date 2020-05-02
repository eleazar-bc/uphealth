<template>
<div class="card container">
    <img src="images/Card Icon 2.png" >
    <div class="card-content">
        <p class="value" v-bind:class="content.color">{{content.total}}</p>
        <p class="description">Total</p>
    </div>
    <div class="card-menu">
        <img src="images/menu-icon.png" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: 'Total',
    props: ['content']
}
</script>

<style>
.card {
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  padding: .5em 1em;
  margin: 0 0 1em 0;
}

.card img {
  margin-right: 1em;
}

.card .card-content {
  width: 100%;
}

.card .card-content p {
  line-height: .3em;
}

.card .card-content p.value {
  font-size: 1.125rem;
  line-height: .13em;
}

.card .card-content p.description {
  font-size: 0.8125rem;
  line-height: 1em;
}

.card .card-menu:hover {
  cursor: pointer;
}
</style>