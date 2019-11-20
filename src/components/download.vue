<template>
  <div class="download"><!-- 首页 -->

      <button class="search-but" @click="download" style="display:flex; margin-top:30px ;text-indent: 17px; font-size:16px;">{{$t('m.downloadBlack')}}</button>

      <div class="bottom" style="top:97px;height:82%">
        <div class="search-head">
          <table style="width: 100%;line-height: 4.75rem;font-size:16px" >
            <tr style="width: 100%;">
              <th width="25%">{{$t('m.date')}}</th>
              <th width="25%">{{$t('m.accountName2')}}</th>
              <th width="25%">{{$t('m.downloadAmount')}}</th>
              <th width="25%">{{$t('m.ipAddress')}}</th>
            </tr>
          </table>
        </div>
        <div class="search-main">
          <div class="search-content">
            <table style="width: 98%;height: 100%;line-height: 4.75rem;font-size:14px; border:#D2D2D2; margin:auto" border=1 rules=rows>
              <tr style="width: 100%;" v-for="item in log" :key="item.id">
                <td width="25%" class="em2">{{item.downloadTime | dateformat('YYYY-MM-DD HH:mm:ss') }}</td>
                <td width="25%">{{item.userName}}</td>
                <td width="25%">{{item.downloadNumber}}</td>
                <td width="25%">{{item.downloadIp}}</td>
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

      <pop3 type='confirm' @took='okfall2' @tocancel='cancelfall' :showstate='showc'>
        <div slot='tlt'>
          <div style="display:flex">
          <input id="password" ref="name" type="password" :placeholder="placeholder"  style="margin:8px 0;width:323px;padding:11px 8px;font-size:15px; border:1px solid #999;border-radius:15px;height: 2rem; margin: 75px auto 20px;text-align: center;"/></div>           
        </div>
      </pop3>


  </div>
</template>

<script>
import {getDownloadLogByUser} from "@/api/home/index.js"
import { Toast } from 'vant';
import md5 from "js-md5"
import axios from "axios"
import $ from "jquery"
import pop3 from '@/components/Pop3.vue'
export default {
  components: { 
    pop3,
  },
  data(){
    return{
      log: [],
      downloadToken:"",
      showa:false,
      showc:false,
      msg:"",
      flag:true,
      placeholder: this.$t('m.inputDownloadPassword'),
      length:1,
      page:1,

    }
  },
  mounted(){
    let id = this.$store.state.id
    this.downloadToken = this.$store.state.userInfo.token
    let token = this.$store.state.userInfo.token
    let sign = md5("WEB" + id)
    var headers = {
      "sign":sign,
      "token":token,
    }
    getDownloadLogByUser({"userId":id, "page":1},headers)
    .then( res=>{
      console.log("黑名单下载页面日志",res)
      this.log = res.data.data
      if(res.data.data.length != 0 ){
          this.flag = false
      } 
    })
    .catch( error=>{console.log(error)})

  },
  methods:{
    download(){   
      this.showc=true;
     
    },
    changepage(){
      let id = this.$store.state.id
      this.downloadToken = this.$store.state.userInfo.token
      let token = this.$store.state.userInfo.token
      let sign = md5("WEB" + id)
      var headers = {
        "sign":sign,
        "token":token,
      }
      getDownloadLogByUser({"userId":id, "page":this.page},headers)
      .then( res=>{
        console.log("黑名单下载页面日志",res)
        this.log = res.data.data
        if(res.data.data.length != 0 ){
            this.flag = false
        } 
      })
      .catch( error=>{console.log(error)})
    },
    okfall(){
      this.showa=false;
    },
    okfall2(){
      this.showc=false;
    },
    cancelfall(){
      this.showc=false;
    }
  }
}
</script>

<style lang="scss" scoped>
.download{
  width:100%
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

.search-but {
    height: 4rem;
    width: 9.4rem;
    border: none;
    font-size: 18px;
    color: #FFFFFF;
    border-radius: 15px;
    margin-left: 2.3rem;
    background-color: #2E65FD;
}
.search-template {
    height: 4rem;
    width: 9.4rem;
    font-size: 18px;
    border: none;
    border-radius: 15px;
    margin-left: 2.3rem;
    color: #2E65FD;
    background-color: #EEEEEE;
    // background-image: url(../images/download.png);
    background-size: 28px 28px;
    background-repeat: no-repeat;
    background-position: 0.8rem 1.5rem;
}
.bottom{
  height: 87%;
  width: 96%;
  margin: 2.5rem;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #FFFFFF;
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
  background-image: url("~@/assets/images/download.png");
  background-size: 28px 28px;
  background-repeat: no-repeat;
  background-position: 0.8rem 1.5rem;
}
.search-head{
  height: 8%;
  width: 100%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: #D4DFFF;
}
.el-pagination{
  position: fixed;
  bottom: 77px;
  left: 50%;
}
.no-data{
  width:100%;
  height:70%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-top:17%;

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
</style>
