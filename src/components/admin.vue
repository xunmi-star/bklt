<template>
  <div class="admin"><!-- 账号管理 -->

      <tempPop></tempPop>

      <div class="bottom" style="top:97px;height:82%" >
        <div class="search-head">
          <table style="width: 100%;line-height: 4.75rem;font-size:16px">
            <tr style="width: 100%;">
              <th width="10%" style="">{{$t('m.id')}}</th>
              <th width="18%">{{$t('m.accountName2')}}</th>
              <th width="18%">{{$t('m.createdDate')}}</th>
              <th width="18%">{{$t('m.permission')}}</th>
              <th width="18%">{{$t('m.userStatus')}}</th>
              <th width="18%">{{$t('m.operating')}}</th>
            </tr>
          </table>
        </div>
        <div class="search-main">
          <div class="search-content">
            <!-- <table style="width: 98%;height: 100%;line-height: 4.75rem;font-size:14px;margin:auto; border:#D2D2D2"  rules=rows> -->
             <table style="width: 98%;height: 100%;line-height: 4.75rem;font-size:14px;margin:auto; border:#D2D2D2" rules=rows>
              <tr style="width: 100%; height:110px" v-for="item in adminList" :key="item.id">
                <td width="10%" class="em2">{{item.id}}</td>
                <td width="18%">{{item.name}}</td>
                <td width="18%" >{{item.createTime | dateformat('YYYY-MM-DD HH:mm:ss')}}</td>
                <td width="18%">
                  <div class="ruler">
                    <div class="ruler-info" style="display:flex">
                      <!-- <div v-if="item.create" class="ruler-img"><img src="@/assets/images/select.png" alt=""/></div> -->
                      <div v-if="item.create" class="ruler-img"><img :src="require('@/assets/images/select.png')" alt=""/></div>
                      <div v-if="!item.create" class="ruler-img2"><img src="@/assets/images/yuan.png" alt=""/></div>
                      <div class="ruler-item" style="text-align: left;">{{$t('m.OpenAccount')}}</div>
                    </div>

                    <div class="ruler-info" style="display:flex;">
                      <div v-if="item.upload" class="ruler-img"><img src="@/assets/images/select.png" alt=""/></div>
                      <div v-if="!item.upload" class="ruler-img2"><img src="@/assets/images/yuan.png" alt=""/></div>
                      <div class="ruler-item" style="text-align: left;">{{$t('m.upload')}}</div>
                    </div>

                    <div class="ruler-info" style="display:flex" >
                      <div v-if="item.select" class="ruler-img"><img src="@/assets/images/select.png" alt=""/></div>
                      <div v-if="!item.select" class="ruler-img2"><img src="@/assets/images/yuan.png" alt=""/></div>
                      <div class="ruler-item" style="text-align: left;">{{$t('m.demand')}}</div>
                    </div>
                 
                  </div>
                </td>

                <td width="18%">
                  <div class="operate">
                    <div v-if="item.state" class="ruler-img center"><img src="@/assets/images/select.png" alt=""/></div>
                    <div v-if="!item.state" class="ruler-img2 center"><img src="@/assets/images/yuan.png" alt=""/></div>
                    <div v-if="item.state" class="ruler-item" style="text-align: left; line-height: 22px;">{{$t('m.userStart')}}</div>
                    <div v-if="!item.state" class="ruler-item" style="text-align: left; line-height: 22px;">{{$t('m.userStop')}}</div>
                  </div>
                </td>

                <td width="18%">
                  <div class="operate">
                    <div  v-if="!item.state" class="operate-item blue a1" @click="start(item.id)"><a href="#/admin" >{{$t('m.enable')}}</a></div>
                    <div v-if="item.state" class="operate-item a2" @click="stop(item.id)" style="font-weight:400;"><a href="#/admin">{{$t('m.disable')}}</a></div>
                    <div class="operate-item a3"  @click="updateUser(item)" style="color:#676767"><a href="#/admin">{{$t('m.edit')}}</a></div>
                  </div>
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

          <!-- 分页 -->
      <el-pagination hide-on-single-page background layout="prev, pager, next" :total="length" :current-page.sync="page" :page-size="5" ref="page" @current-change="changepage"></el-pagination>
          <!-- <div class="page">
          
          </div> -->


        </div>
      </div>
  

     <div class="pop2">
        <pop2 type='alert' @took='okfall' :showstate='showa' :updateUserData="updateUserData">
          <div slot='tlt'>
            <div style="float:right; margin:15px; font-size:25px" @click="okfall" :showstate='showa'>X</div>
            <br/>
            <div style="display:flex">
              <div :temp='showa' style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 16px;">{{$t('m.name')}}:</div>  <input id="name2" ref="name" type="text" placeholder=""  :value="updateUserData.name" style="margin:8px 0;width:323px;padding:11px 8px;font-size:15px; border:1px solid #999;margin-left:38px;border-radius:15px;height: 2rem;position: absolute;left: 196px;font-size:14px;text-indent:1em;"/></div>   
              <div style="margin-top:20px;display:flex"><div style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 16px;">{{$t('m.account2')}}:</div>  <input id="account2" ref="account" type="text" placeholder="" disabled="disabled" :value="updateUserData.account" style="margin:8px 0;width:323px;padding:11px 8px;font-size:15px; border:1px solid #999;margin-left:38px;border-radius:15px;height: 2rem;position: absolute;left: 196px;font-size:14px;text-indent:1em;"/></div>
              <div style="margin-top:20px;display:flex"><div style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 16px;">{{$t('m.password2')}}:</div>  <input id="code2" ref="code" type="password" placeholder="" :value="updateUserData.password" style="margin:8px 0;width:323px;padding:11px 8px;font-size:15px; border:1px solid #999;margin-left:38px;border-radius:15px;height: 2rem;position: absolute;left: 196px;font-size:14px;text-indent:1em;"/></div>
              <div style="margin-top:20px;display:flex"><div style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 16px;">{{$t('m.permission')}}:</div><div style="margin:8px 0;width:0px;padding:11px 8px;font-size:15px;margin-left:0px;border-radius:15px;height: 40px;font-size:18px;"/>
              <form action="" method="get" style="position: absolute;left: 208px;">
                <label v-if="roleFlag" style="margin-left:20px;font-size:16px"><input id="create2" name="Fruit" style="margin-left:5px" type="checkbox" value="" />{{$t('m.OpenAccount')}} </label>
                
                <label style="margin-left:20px;font-size:16px"><input id="upload2" name="Fruit" type="checkbox" value="" />{{$t('m.upload')}} </label>
                <label style="margin-left:20px;font-size:16px"><input id="select2" name="Fruit" type="checkbox" value="" />{{$t('m.demand')}} </label>  
              </form>
              </div>
          </div>
        </pop2>
     </div>

  


  </div>
</template>

<script>
import {getUsers,updateUserState} from "@/api/home/index.js"
import { Toast } from 'vant';
import md5 from "js-md5"
import $ from "jquery"
// import axios from "axios"
import pop2 from "@/components/Pop2.vue"         //编辑
import tempPop from "@/components/tempPop.vue"   //新增
export default {
  components: { 
    pop2,
    tempPop,
  },
  data(){
    return{
      showa:false,               //pop弹窗插件需用到
      showc:false,              //pop弹窗插件需用到
      msg:"",                   //pop弹窗插件需用到
      adminList:[],             //账号管理信息
      updateUserData:[],        //需传给pop2插件的编辑信息
      flag: true,               //无数据的标志
      roleFlag: true,
      page:1,
      length: 1,
      imgFlag: false,
    }
  },
  mounted(){
    //打开页面就加载账号信息
    let id = this.$store.state.id
    let token = this.$store.state.userInfo.token
    let sign = md5("WEB" + id)
    var headers = {
      "sign":sign,
      "token":token,
    }
    getUsers({"id":id, "page":1}, headers)
    .then( res=>{
      console.log("admin",res)
      this.adminList = res.data.data
      this.length = res.data.page
      if(res.data.data.length != 0){
        this.flag = false
      }
      if(this.$store.state.userInfo.data.role != 1){     
        this.roleFlag = false
        console.log("flag",this.roleFlag)
      }
    })
    .catch( error=>{
      console.log(error)
    })

  },

  updated(){
    // console.log("渲染完毕")
    // this.$router.push("admin")
  },

  methods:{
    changepage(){
      console.log("页码改变",this.page)
       let id = this.$store.state.id
      let token = this.$store.state.userInfo.token
      let sign = md5("WEB" + id)
      var headers = {
        "sign":sign,
        "token":token,
      }
      getUsers({"id":id, "page":this.page}, headers)
      .then( res=>{
        console.log("admin",res)
        this.adminList = res.data.data
        if(res.data.data.length != 0){
          this.flag = false
        }
        if(this.$store.state.userInfo.data.role != 1){     
          this.roleFlag = false
          console.log("flag",this.roleFlag)
        }
      })
      .catch( error=>{
        console.log(error)
      })
    },
    //新增
    add(){
      this.showa=true;
    },
    //编辑
    updateUser(item){
      console.log("开始编辑")
      this.showa=true;
      this.updateUserData = item;
      // console.log($('#create2'))
      if(item.create){
        $('#create2').attr('checked',"checked")
      }
      if(item.upload){
        $('#upload2').attr('checked',"checked")
      }
      if(item.select){
        $('#select2').attr('checked',"checked")
      }
      //window.location.replace("http://localhost:8080/admin#")
      // console.log("渲染数据",this.updateUserData)
      // this.$router.push("admin")
    },

    okfall(){
      this.showa=false;
    },
 
    start(id){
      let userId = this.$store.state.id
      let token = this.$store.state.userInfo.token
      let sign = md5("WEB" + userId)
      var headers = {
        "sign":sign,
        "token":token,
      }
      updateUserState({"id":id, "state":1}, headers)
      .then( res=>{
        console.log("启用",res)
        // this.adminList = res.data.data
      })
      .catch( error=>{
        console.log(error)
      })
      Toast.success(this.$t("m.success"));
      this.$router.go(0)
    },

    stop(id){
      let userId = this.$store.state.id
      let token = this.$store.state.userInfo.token
      let sign = md5("WEB" + userId)
      var headers = {
        "sign":sign,
        "token":token,
      }
      updateUserState({"id":id, "state":0}, headers)
      .then( res=>{
        console.log("停用",res)
        // this.adminList = res.data.data
      })
      .then( error=>{
        console.log(error)
      })
      Toast.success(this.$t("m.success"));
      this.$router.go(0)
    } 
  }
}
</script>

<style lang="scss" scoped>
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
    font-size: 16px;
    color: #FFFFFF;
    border-radius: 15px;
    background-color: #2E65FD;
    display: flex;
    margin: 30px;
    text-align: center;
}
.search-template {
    height: 4rem;
    width: 9.4rem;
    font-size: 16px;
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
.search-head{
  background-color:#D4DFFF;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.search-template{
  height: 4rem;
  width: 9.4rem;
  font-size: 16px;
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

.ruler{
  height: 100%;
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
  margin-left: 37%;
}
.ruler-item{
  height: 30px;
  width: 40%;
  line-height: 30px;
  margin-left: 20px;
}
.ruler-info{
  display: flex;
  height: 30px;
  width: 100%;
  margin: auto;
}
.ruler-img{
  width:20px;
  height:20px;
  margin-top: -8px;

  img{
    width:100%;
    height:100%;
  }
}
.ruler-img2{
  width:23px;
  height:23px;
  margin-top: -8px;

  img{
    width:100%;
    height:100%;
  }
}
.center{
  display: flex;
  align-items: center;
}
.operate{
  height: 100%;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: center;
}
.operate-item{
  margin-left: 20px;
}
.blue{
  color: #2E65FD;
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
.a1 a:link{
  color:#2E65FD;
}
.a1 a:visited{
  color:#2E65FD;
}
.a2 a:link{
  color:#2E65FD;
}
.a2 a:visited{
  color:#2E65FD;
}
.a3 a:link{
  color:#676767;
}
.a3 a:visited{
  color:#676767;
}
</style>
