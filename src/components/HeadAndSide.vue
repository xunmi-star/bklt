<template>
  <div class="home-and-side"><!-- 构架 -->
    <div class="head">
      <div class="user-box">
        <div class="user">
          <!-- <div class="user-icon"><img src="@/assets/images/5.png" alt=""/></div> -->
          <div class="user-name">千小二</div>
          <!-- <div class="user-icon2"></div> -->
        </div>
      </div>
    </div>

    <div class="side"> 
      <div class="list">
        <div class="blacklist">
          <img src="" alt="">
          <form name="form_name" style="height:6rem;padding-right:5px">
            <select name="select_name" class="select" style="background-color:#1F2F3E;border:none;color:#979797;">
                <option value="1">黑名单管理</option>
                <!-- <option value="2">黑名单查询</option>
                <option value="3">黑名单上传</option>
                <option value="4">黑名单下载</option> -->
            </select><br>
          </form>
        </div>
        <div class="list-item">黑名单查询</div>
        <div class="list-item" @click="clickUpload">黑名单上传</div>
        <div class="list-item">黑名单下载</div>
        <div class="list-item">账号管理</div>

      </div>
    </div>
    <div class="main">
      <!-- 插入组件 -->
      <!-- <search></search> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { home } from '@/api/home/index.js'
import search from "../components/Search.vue"
import axios from "axios"

export default {
    props: {
    typeId:{
      require: true,
    }
  },
  components: { 
    search,
  },

  data() {
    return {
      typeList:[],      //卡片列表
      goodsList:[],     //商品列表
      noticeList:[],    //公告列表
      bannerList:[],    //轮播图列表
      value: 0,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ],
    }
  },
  mounted(){
    // console.log("id",this.$route.query.typeId)
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
.home-and-side{
  background-color: #EEEEEE;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
}
.head{
  height: 8%;
  width: 100%;
  background-color: #1F2F3E;
}
.user-box{
  height: 100%;
  width: 270px;
  float: right;
}
.user{
  height: 100%;
  width: 53%;
  display: flex;
  float: right;
  align-items: center;


  .user-icon{
    width: 32px;
    height: 32px;

    img{
      height: 100%;
      width: 100%;
    }
  }
  .user-name{
    height: 32px;
    line-height: 32px;
    color: #FFFFFF;
    margin: 0 10px;
  }
  .user-icon2{
    width: 32px;
    height: 32px;
    // background-image: url("../assets/images/小额急速.png");
    // background-size:100% 100%;
    // background-repeat: no-repeat;
    
  }

}
.side{
  height: 92%;
  width: 9.6%;
  background-color: #1F2F3E;

  .list{
    width: 100%;
    height: 6rem;
    display: flex;
    flex-wrap: wrap;

    .blacklist{
      height: 100%;
      width: 100%;

      .select{
        height: 100%;
        width: 100%;
        font-size: 16px;
        text-indent: 4em;
        background-image: url("~@/assets/images/name.png");
        background-size: 20px 20px;
        background-repeat: no-repeat;
        background-position: 34px 26px;
      }
  
    }
    .list-item{
      height: 6rem;
      width: 100%;
      font-size:16px;
      color: #979797;
      text-indent: 2em;
      text-align: center;
      line-height: 6rem;
      background-image: url("~@/assets/images/name.png");
      background-size: 20px 20px;
      background-repeat: no-repeat;
      background-position: 34px 26px;
    }
  }
}
.main{
  height: 92%;
  width: 90.4%;
  // background-color:yellowgreen;
}

</style>

