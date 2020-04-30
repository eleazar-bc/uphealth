<template>
<div class="user">
    <div class="username">John Doe <img src="images/small-down.png" alt=""></div>
    <img src="images/Avatar.png" alt="" class="avatar">
</div>
</template>

<script>
export default {
    name: 'User'
}
</script>

<style>
.home header .user {
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

.home header .user .username {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  font-size: 0.8125rem;
  line-height: .20em;
}

.home header .user .username:hover {
  cursor: pointer;
}

.home header .user .username img {
  margin-left: .5em;
}

.home header .user .avatar:hover {
  cursor: pointer;
}

@media (max-width: 1024px) {
  .home header .user .username {
    display: none;
  }
}
</style>