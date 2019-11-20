<template>
  <div class='md-cont' v-show='showstate'>
    <!-- 编辑 -->
    <div class='md-wrapper' >
      <div class='md-title'>
      <slot name='tlt' >
        标题
      </slot>
      </div>
      <div class='md-text'>
      <slot name='text' >
        
      </slot>
      </div>
      <div class='footer'>
        <div v-if='type=="confirm"'  @click='tocance' class='md-btn'>{{$t('m.cancel')}}</div>
        <div class='md-btn' @click='took'>{{$t('m.determine')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {updateUser, getUsers} from "@/api/home/index.js"
import { Toast } from 'vant';
import md5 from "js-md5"
import axios from "axios"
import $ from "jquery"
export default {
  // name: "modal",
  props:[
    "type",
    "showstate",
    "updateUserData",
  ],
  methods:{
    tocance(){
      this.$emit('tocance');
      console.log("取消")
      // this.$router.go(-1)
    },
    took(){
      this.$emit('took');
      console.log("pop2-item信息",this.$props.updateUserData)  
      var name = $("#name2").val()
      var account = $("#account2").val()
      var password = $("#code2").val()
      var create = $("#create2").prop("checked");
      var upload = $("#upload2").prop("checked");
      var select = $("#select2").prop("checked");
      let userId = this.$store.state.id
      let token = this.$store.state.userInfo.token
      let sign = md5("WEB" + userId)
      var data = {
        "id": this.$props.updateUserData.id,
        "name":name, 
        "account":account,
        "password":password,
        "create":create,
        "upload":upload,
        "select":select
      }
      var headers = {
        "sign":sign,
        "token":token,
      }
      if(name.length == 0){
        Toast("名称不能为空")
        return;
      }
      else if(account.length == 0){
        Toast("账号不能为空")
        return;
      }
      else if(password.length == 0){
        Toast("密码不能为空")
        return;
      }else{
        updateUser(data, headers)
        .then(res=>{
          console.log("编辑后请求的数据",res);     
        })
        .catch(error => {
          console.log(error)
        })
      }

      //刷新当前页面
      this.$router.go(0);





    },

  }
}
</script>

<style scoped>
.md-cont{
  position:fixed;
  left:0;
  right: 0;
  top:0;
  bottom: 0;
  z-index: 500;
  background:rgba(0,0,0,0.3);
  text-align:center;
  overflow: hidden;
  white-space:nowrap;
  }
.md-cont:after{
  content:"";
  display:inline-block;
  width:0;
  height:100%;
  visibility: hidden;
  vertical-align:middle;
  }
.md-wrapper{
  display:inline-block;
  vertical-align:middle;
  background:#fff;
  color:#333333;
  height:550px;
  width:750px;
  font-size:3.34rem;
  border-radius: 0.1rem;
  max-width:100%;
}
.md-title{
  font-size:4rem;
  text-align:center;
  position:relative;
  }
.md-text{
  font-size:5rem;
  text-align:center;
  line-height:4rem;
  padding:2rem 5rem;}
.footer{
  display:flex;
line-height:8rem;
  color:#488BF1;
  font-size:0.32rem;}
.md-btn{
  background-color:#2E65FD;
  display: flex;
  align-items: center;
  justify-content: center; 
  border-radius: 15px; 
  border:none; 
  margin:auto;
  width:9.4rem;
  height:4rem;
  font-size: 16px; 
  color: #FFFFFF;
}
.md-btn +.md-btn{
  border-left:0.01rem solid #E5E5E5;
  }
</style>