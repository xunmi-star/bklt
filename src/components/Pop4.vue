<template>
  <div class='md-cont' v-show='showstate'>
      <!-- 下载 -->
      <form style="display:none" id="dow" method='post'>
        <input id="tokenD" type='text' name='token' />
        <input id="code" type='text' name='password' value=""/>
      </form>

    <div class='md-wrapper' >
      <div class='md-title'>
      <slot name='tlt' >
   
      </slot>
      </div>
      <div style="margin:30px auto">文件名：</div>
      <div class='footer'>
        
        <div v-if='type=="confirm"' @click='tocancel' class='md-btn'>{{$t('m.determine')}}</div>
        <div class='md-btn' @click='took' style="margin-left: 23px;">{{$t('m.cancel')}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
import $ from "jquery"
import md5 from "js-md5"
import {chackPWD} from "@/api/home/index.js"
import { Toast } from 'vant';
export default {
  name: "modal",
  props:[
    "type",
    "showstate",
    "pop4Data"
  ],
  data(){
    return{
      token:'',
      password:'',
      value:''
    }
  },
  mounteds(){
    // console.log("pop4信息",this.$props.pop4Data)
  },
  methods:{
    tocancel(){
      this.$emit('tocancel');
      console.log("pop4信息",this.$props.pop4Data)

      let id = this.$store.state.id
      let token = this.$store.state.userInfo.token
      this.upToken = token

      this.headers = { token: token }

      let sign = md5("WEB" + id)
      var headers = {
        "sign":sign,
        "token":token,
      }

        // axios.post("http://www.lucklyjz.com/bklt/chackPWD",
        axios.post("http://47.112.117.37:8080/bklt/chackPWD",
        {password:$("#password").val()}, 
        {headers:headers})
        .then(res => {
          console.log("succ",res);
          if(res.data.code == 200){
            var password = $("#password").val()
            var code = $("#code").val()
            $("#code").attr('value',password)
            let tokenD = this.$store.state.userInfo.token
            $("#tokenD").attr('value',tokenD)
            var $eleForm = $("#dow")
            $eleForm.attr("action",res.data.url);
            $eleForm.submit();  
          }else{
            Toast(this.$t("m.passError"));
          }
        })
        .catch(error =>{
          console.log("error",error)
        })
    },
    took(){
      this.$emit('took');
      console.log("取消11111111111")

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
  height:200px;
  width:528px;
  font-size:3.34rem;
  border-radius: 0.1rem;
  max-width:100%;
  margin-left: 9%;
}
.md-title{
  font-size:4rem;
  text-align:center;
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
  margin-left: 93px;
}
.md-btn +.md-btn{
  border-left:0.01rem solid #E5E5E5;
  background-color: #626262;
  }
</style>