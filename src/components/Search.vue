<template>
<div class="search">
    <div class="top">
    <div class="search-box">
      <div class="search">
        <input type="input" id="strCode" class="search-input" :placeholder="placeholder" ref="search"/>
        <button class="search-but" @click="clickSearch">{{$t('m.demand')}}</button>
      </div>
    </div>
  </div>
  <div class="bottom" >
    <div class="search-head">
      <table style="width: 100%;line-height: 4.75rem;font-size:16px">
        <tr style="width: 100%;">
          <th width="10%">{{$t('m.number')}}</th>
          <th width="10%">{{$t('m.day')}}</th>
          <th width="10%">{{$t('m.name')}}</th>
          <th width="10%">{{$t('m.accountName')}}</th>
          <!-- <th width="15%">{{$t('m.idCard')}}</th> -->
          <th width="15%">{{$t('m.phone')}}</th>
          <th width="20%">{{$t('m.remake')}}</th>
        </tr>
      </table>
    </div>
    <div class="admin-main">
      <!-- <div class="admin-img"></div> -->
      <div class="search-content">
        <table style="width: 100%;height: 100%;line-height: 4.75rem;font-size:14px;border:#D2D2D2" rules=rows>
          <tr style="width: 100%;" v-for="item in searchList" :key="item.id">
            <td width="10%" class="em2">{{item.id}}</td>
            <td width="10%">{{item.createTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</td>
            <td width="10%">{{item.name}}</td>
            <td width="10%">{{item.createUserName}}</td>
            <!-- <td width="15%">{{item.idCard}}</td> -->
            <td width="15%">{{item.phone}}</td>
            <td width="20%">
              <div class="hidden" :title="item.remake">{{item.remake}}</div>
            </td>
          </tr>
        </table>
      </div>
      <div class="no-data" v-if="flag">
        <div class="img-box">
          <img src="@/assets/images/nodata.png" alt=""/>
          <div class="no-data-text">{{$t('m.noData')}}</div>
        </div>
      </div>

      <el-pagination hide-on-single-page background layout="prev, pager, next" :total="length" :current-page.sync="page" :page-size="5" ref="page" @current-change="changepage"></el-pagination>

    </div>
    
  </div>
</div>
</template>

<script>
import {getBlack} from "@/api/home/index.js"
import { Toast } from 'vant';
import $ from "jquery"
import axios from "axios"
import md5 from "js-md5"
export default {
  data(){
    return{
      placeholder: this.$t('m.searchInput'),
      searchList: [],
      flag:true,
      length: 1,
      page: 1,
    }
  },
  mounted(){
    
  },
  methods:{
      changepage(){
        // Toast.success(this.$t("m.success"));
        console.log("页码改变",this.page)
        let id = this.$store.state.id
        let token = this.$store.state.userInfo.token
        let sign = md5("WEB" + id)

        // Toast.loading({mask: true,message: '加载中...'});

        var strCode = this.$refs.search.value
        var data = {"str": strCode, "page":this.page}
        var headers = {
          "sign":sign,
          "token":token,
        }
        // axios.post("http://192.168.5.15/getBlack",data,{headers:headers})
        getBlack(data,headers)
        .then(res =>{
          console.log("查询到的数据",res)
          if(res.status == "200"){
            this.searchList = res.data.data
            this.length = res.data.page
            console.log("数据长度",this.length)
          } 
          if(res.data.data.length != 0 ){
              this.flag = false
              // console.log(res.data.data.length)
          }  
        })
        .catch(error =>{
          console.log(error)
        })
        console.log("数据列表",this.searchList)
      },

     clickSearch(){
      // Toast.success(this.$t("m.success"));
      let id = this.$store.state.id
      let token = this.$store.state.userInfo.token
      let sign = md5("WEB" + id)

      var strCode = this.$refs.search.value
      var data = {"str": strCode, "page":1}
      var headers = {
        "sign":sign,
        "token":token,
      }
      // axios.post("http://192.168.5.15/getBlack",data,{headers:headers})
      getBlack(data,headers)
      .then(res =>{
        console.log("查询到的数据",res)
        if(res.status == "200"){
          this.searchList = res.data.data
          this.length = res.data.page
          console.log("数据长度",this.length)
          Toast(this.$t("m.SearchDataText") + res.data.page)
        } 
        if(res.data.data.length != 0 ){
            this.flag = false
            // console.log(res.data.data.length)
        }else{
          this.flag = !false
        }
      })
      .catch(error =>{
        console.log(error)
      })
      console.log("数据列表",this.searchList)
     } 
  }
}
</script>

<style lang="scss" scoped>

.top{
  height: 14.25rem;
  width: 96%;
  margin: 2.5rem;
  position: relative;
  background-color: #FFFFFF;
}
.bottom{
  height: 625px;
  width: 96%;
  margin: 2.5rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #FFFFFF;
}
.search-box{
  height: 4rem;
  width: 100%;
  position: absolute;
  top: 4rem;
}
.search{
  height: 100%;
  width: 100%;
}
.search-input{
  height: 100%;
  width: 34.8rem;
  border: none;
  border-radius: 15px;
  text-align: center;
  border: 1px solid #BFBFBF;
}
.search-but{
  height: 4rem;
  width: 9.4rem;
  border: none;
  font-size: 16px;
  color: #FFFFFF;
  border-radius: 15px;
  margin-left: 2.3rem;
  background-color: #2E65FD;
}

.search-template{
  height: 4rem;
  width: 9.4rem;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  margin-left: 2.3rem;
  color: #2E65FD;
  background-color: #EEEEEE;
  // background-image: url("../images/download.png");
  background-size: 28px 28px;
  background-repeat: no-repeat;
  background-position: 0.8rem 1.5rem;
}
.search-head{
  height: 57px;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #D4DFFF;
}
.search-main{
  height: 92%;
  width: 97%;
  margin-left: 1.5%;
}
.admin-main{
  height: 595px;
  width: 97%;
  margin-left: 1.5%;
}
.hidden{
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
}
.em2{
  text-indent: -2em;
}
.search-content td{
  text-align: center;
}
.no-data{
  width:100%;
  height:70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  .img-box{
    margin: auto;


    img{
      width:191px;
      height:191px;
      margin: auto;
    }
  }
  .no-data-text{
    width: 100%;
    margin-top:56px;
    color: #000000;
    text-indent: -47px;
  }
}
/* 单个样式 */
.top30{
  margin-top: 30px;
}
.blue{
  color: #2E65FD;
}
.el-pagination{
  position: fixed;
  bottom: 77px;
  left: 50%;
}
</style>
