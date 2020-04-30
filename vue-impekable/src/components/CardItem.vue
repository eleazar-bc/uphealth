<template>
<div class="card container">
    <img v-bind:src="content.src" alt="">
    <div class="card-content">
        <p class="value" v-bind:class="content.color">{{content.value}}</p>
        <p class="description">{{content.description}}</p>
    </div>
    <div class="card-menu">
        <img src="images/menu-icon.png" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: 'CardItem',
    props: ['content']
}
</script>

<style>
.card {
  width: 32%;
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