<template>
  <div class="admin">
    <Head></Head>
    <div class="main">
      <side2></side2>
      <admin></admin>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Head from "../components/Head.vue"
import side2 from "../components/Side2.vue"
import upload from "../components/upload.vue"
import admin from "../components/admin"
export default {
  components: { 
    Head,
    side2,
    admin,
  },
}
</script>

<style lang="scss" scoped>
.admin{
  width:100%;
}
.main{
  height: 92%;
  width: 100%;
  background-color: #EEEEEE;
  display: flex;
}
</style>
