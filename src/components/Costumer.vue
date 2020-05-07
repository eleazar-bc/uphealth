<template>
<div class="costumer container">
    <div class="info">
        <img class="profile-picture" v-bind:src="costumer.src" alt="">
        <div class="profile">
            <div class="name">{{costumer.name}}</div>
            <div class="address">{{costumer.address}}</div>
            <div class="number">{{costumer.contact}}</div>
        </div>
        <div class="buttons">
            <img class="edit-button" src="images/edit.png" alt="">
            <img class="close-button" src="images/close.png" alt="">
        </div>
    </div>
    <div class="social-media">
        <img src="images/Path 316.png" alt="">
        <img src="images/Path 38.png" alt="">
        <img src="images/Path 39.png" alt="">
        <img src="images/Path 40.png" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: 'Costumer',
    props: ['costumer']
}
</script>

<style scoped>
.costumer {
    width: 49%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
    margin-bottom: 1em;
}

.costumer .info {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-bottom: 1px solid #95989A;
  padding: 1.2em;
}

.costumer .info .profile-picture {
  height: 72px;
  width: 72px;
  border-radius: 50%;
  margin-right: 1.2em;
}

.costumer .info .profile {
  width: 70%;
}

.costumer .info .profile .name {
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 20px;
  padding-bottom: .5em;
}

.costumer .info .profile .address, .costumer .info .profile .number {
  font-size: 0.9375rem;
  line-height: 25px;
  opacity: 50%;
}

.costumer .info .buttons {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  width: 20%;
}

.costumer .social-media {
  padding: .5em 0 .5em 6.8em;
}

.costumer .social-media img {
  margin-right: 1.1em;
}
@media (max-width: 768px) {
  .costumer {
    width: 100%;
  }
}
</style>