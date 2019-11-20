<template>
  <div class="home"><!-- 首页 -->
    <Head></Head>
    <div class="main">
      <!-- <side></side> -->
      <side2></side2>
      <search></search>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { home } from '@/api/home/index.js'
import handAndSide from "../components/HeadAndSide.vue"
import axios from "axios"
import Head from "../components/Head.vue"
import side2 from "../components/Side2.vue"
import search from "../components/Search.vue"

export default {
    props: {
    typeId:{
      require: true,
    }
  },
  components: { 
    search,
    handAndSide,
    Head,
    side2
  },
  methods:{
    clickUpload(){
      var id = this.$route.query.typeId
      var token = this.$route.query.token
      this.$router.push({
        name:"upload",
        query:{
    
        }
      })
    }
  }

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

