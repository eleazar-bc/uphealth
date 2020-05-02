<template>
<div class="user">
    <div class="username">Admin <img src="images/small-down.png" alt=""></div>
    <img src="images/Avatar.png" alt="" class="avatar">
</div>
</template>

<script>
export default {
    name: 'User'
}
</script>

<style scoped>
.user {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
      justify-content: space-around;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  width: 10vw;
}

.user .username {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 0.8125rem;
  line-height: .20em;
}

.user .username:hover {
  cursor: pointer;
}

.user .username img {
  margin-left: .5em;
}

.user .avatar:hover {
  cursor: pointer;
}

@media (max-width: 1024px) {
  .user .username {
    display: none;
  }
}
</style>