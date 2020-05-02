<template>
<div class="detail">
    <div class="detail-description">
        <span class="name">{{product.name}}</span>
        <span class="quantity">Quantity: 3</span>
    </div>
    <div class="detail-value">{{product.price}}</div>
    <img class="remove-button" src="images/close.png" alt="">
</div>
</template>

<script>
export default {
    name: 'CartItem',
    props: ['product']
}
</script>

<style>
.detail {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  height: 80px;
}

.detail .detail-description {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: flex-start;
  font-size: 0.8125rem;
  line-height: 20px;
  flex-direction: column;
}

.name {
  opacity: .8;
}

.quantity {
  opacity: .5;
}

.detail .detail-description img {
  margin-right: 1em;
}

.detail .detail-value {
  font-size: 0.9375rem;
  line-height: 25px;
}

.remove-button:hover {
  cursor: pointer;
}
</style>