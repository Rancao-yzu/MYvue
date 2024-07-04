<template>
  <header>

    <div class="logo w1200"></div>
    <div class="c">
        <img class="m-image" src="/image/01.jfif">
        <span>庄金浩§</span>
    </div>

  </header>

</template>

<script setup lang="ts">
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
</script>

<style scoped>
.m-image {
  position: absolute;
  top: 1.5vh;
  right: 8vw;
  width: 4vw;
}
span{
  position: absolute;
  top: 3vh;
  font-size: 1.4vw;
  right: 2vw;
  vertical-align: middle;
}
.c{
  width:5vw ;
  height:8vh;
  margin-left: auto;
  margin-right: 2vw;
}

.logo {
  height: 8vh;
  background: url('/image/tzdx.png') no-repeat ;
  top: 3vh;
  position: absolute;
  background-size: contain;
  z-index: 1;
}

.w1200 {
  width: 14.5vw;
  left: 3vw;
}


</style>
