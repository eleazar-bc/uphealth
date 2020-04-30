<template>
<div class="notifications">
    <div class="support"><img src="images/Support Iocn.png" alt=""></div>
    <div class="chat"><img src="images/Chat Icon.png" alt=""></div>
    <div class="notification"><img src="images/Notification Icon.png" alt=""></div>
</div>
</template>

<script>
export default {
    name: 'Notifications'
}
</script>

<style>
.notifications {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  width: 10vw;
}

.notifications img {
  margin: 0 .2em;
}

.notifications img:hover {
  cursor: pointer;
}
</style>