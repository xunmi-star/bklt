<template>
  <div class="upload">
    <Head></Head>
    <div class="main">
      <side2></side2>
      <download></download>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import Head from "../components/Head.vue"
import side2 from "../components/Side2.vue"
import upload from "../components/upload.vue"
import download from "../components/download.vue"
export default {
  components: { 
    Head,
    side2,
    download,
  },
}
</script>

<style lang="scss" scoped>
.main{
  height: 92%;
  width: 100%;
  background-color: #EEEEEE;
  display: flex;
}
</style>
