<template>
  <div class="login"><!-- 登录 -->

    <div class="lang"><a href="" @click.prevent="changeLang">{{lang}}</a></div>

    <div class="login-box">

      <div class="left"></div>

      <div class="main">
        <div class="content">
          <div class="title"><p>{{$t('m.systemName')}}</p></div>
          <div class="input-box"> 

            <div class="input-item" style="margin-top:4.17rem">
              <div class="input">
                <input class="phone"  type="tel" :placeholder="placeholder1" maxlength="11" ref="account"/>
              </div>
              <div class="input-icon">
                <svg t="1562754084593" class="icon" viewBox="0 0 1050 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="21291" width="23" height="23"><path d="M422.497411 583.785026c0-4.069744-0.262564-8.244513-0.787692-12.445539-2.625641-20.217436-11.001436-40.96-25.652513-63.382974a231.161436 231.161436 0 0 0-24.812308-31.796513c-14.493538-15.123692-26.518974-42.272821-34.842256-78.506667a506.88 506.88 0 0 1-12.130461-110.119384l0.052512-4.673641h-0.052512v-9.872411c0-86.908718 31.08759-145.906872 95.048205-180.381538a231.292718 231.292718 0 0 1 67.767795-23.420718 188.809846 188.809846 0 0 1 29.459692-3.492103h13.758359c5.303795 0.052513 15.753846 0.997744 29.249641 3.492103a231.371487 231.371487 0 0 1 67.767795 23.394462c63.960615 34.500923 95.048205 93.499077 95.048205 180.381538v14.546051c0.105026 16.856615-0.918974 61.308718-12.130462 110.145641-8.297026 36.233846-20.348718 63.382974-34.842256 78.506667-8.008205 8.375795-17.066667 19.954872-24.786051 31.796513-14.677333 22.422974-23.053128 43.139282-25.652513 63.382974-0.525128 4.201026-0.787692 8.375795-0.787693 12.445539 0 61.256205 28.041846 91.897436 130.468103 142.519795 146.537026 72.415179 212.493128 122.88 220.343795 168.749948l0.131282 2.809436 7.141744 66.113641H66.95936l4.647385-67.137641v-0.315077c0.078769-44.163282 61.886359-91.897436 220.422564-170.220307 102.4-50.648615 130.468103-81.26359 130.468102-142.519795z m617.393231 310.298256c-4.096-42.850462-23.867077-77.377641-64.091897-111.957333-37.756718-32.426667-95.363282-66.796308-192.643282-114.845539-86.751179-42.876718-94.050462-55.532308-94.050462-83.495384 0-1.234051 0.105026-2.599385 0.262564-3.990975 1.260308-9.793641 6.564103-22.107897 15.386257-35.577436 6.564103-9.977436 13.233231-18.116923 17.302974-22.317948 23.341949-24.418462 40.172308-60.179692 51.462564-109.384205 5.77641-25.363692 9.87241-53.510564 12.130462-83.626667 1.549128-20.742564 1.706667-35.026051 1.68041-41.69518v-14.230974c0-56.556308-11.579077-105.865846-34.474667-146.510769-21.766564-38.701949-53.720615-69.579487-94.969436-91.844923-26.25641-14.125949-55.401026-24.234667-86.593641-30.037334A251.693949 251.693949 0 0 0 530.595052 0h-14.336c-6.354051 0.052513-20.164923 0.708923-40.88123 4.568615-31.245128 5.77641-60.363487 15.911385-86.593641 30.037334-41.248821 22.239179-73.202872 53.142974-94.995693 91.844923-22.843077 40.644923-34.44841 89.954462-34.44841 146.510769v14.257231c-0.052513 6.642872 0.131282 20.900103 1.68041 41.695179 2.231795 30.116103 6.301538 58.236718 12.130462 83.600411 11.290256 49.204513 28.094359 84.965744 51.462564 109.357948 4.043487 4.253538 10.765128 12.340513 17.276718 22.344205 8.822154 13.469538 14.125949 25.783795 15.386256 35.577436 0.183795 1.39159 0.262564 2.730667 0.262564 3.990975 0 27.963077-7.273026 40.618667-93.997948 83.495384-101.218462 49.992205-157.853538 83.285333-195.531488 114.950564C25.710539 817.755897 6.805924 852.33559 6.753411 894.372103l-6.590359 94.49682a32.768 32.768 0 0 0 36.916513 34.816H1013.319155a31.507692 31.507692 0 0 0 5.881436 0.262564A29.932308 29.932308 0 0 0 1050.340693 993.988923v-1.181538l-10.450051-98.697847z" p-id="21292" fill="#858585"></path></svg>
              </div>               
            </div>    

            <div class="input-item" style="margin-top:4rem">
              <div class="input">
                <input class="phone" type="password" :placeholder="placeholder2" ref="paw" @keyup.enter="clickSubmit"/>
                <!-- <input class="phone" type="password" :placeholder="placeholder2" ref="paw"/> -->
              </div>   
              <div class="input-icon">
                <svg t="1562754257736" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3637" width="23" height="23"><path d="M191.525926 432.355556h640.948148c34.133333 0 60.681481 26.548148 60.681482 64.474074v462.696296c0 34.133333-26.548148 64.474074-60.681482 64.474074H191.525926C157.392593 1024 130.844444 997.451852 130.844444 959.525926V496.82963c0-37.925926 26.548148-64.474074 60.681482-64.474074z m288.237037 310.992592v98.607408c0 7.585185 7.585185 7.585185 7.585185 7.585185h53.096296c7.585185 0 7.585185-7.585185 7.585186-7.585185v-98.607408c26.548148-15.17037 41.718519-41.718519 41.718518-72.059259 0-41.718519-34.133333-75.851852-75.851852-75.851852s-75.851852 34.133333-75.851852 75.851852c0 34.133333 11.377778 56.888889 41.718519 72.059259z" fill="#858585" p-id="3638"></path><path d="M658.014815 269.274074c0-83.437037-72.059259-163.081481-163.081482-163.081481-83.437037 0-163.081481 72.059259-163.081481 163.081481v170.666667H244.622222V261.688889C244.622222 121.362963 358.4 0 506.311111 0c140.325926 0 261.688889 113.777778 261.688889 261.688889v56.888889h-102.4l-7.585185-49.303704z" fill="#858585" p-id="3639"></path></svg>
              </div>
            </div>
 
            <!-- <div class="input-item" style="margin-top:4rem">
              <div class="input">
                <input class="phone" type="tel" placeholder="请输入验证码"/>
              </div>   
              <div class="auth-code">
              </div>
            </div>  -->

            <div class="submit">
              <button class="but" @click="clickSubmit">{{$t('m.login')}}</button>
            </div>

          </div>
        </div>

      </div> 
    </div>
  </div>
</template>


<script>
import {userLogin} from "@/api/home/index.js"
import axios from "axios"
import { Toast } from 'vant';
export default {
  components:{

  },
  data(){
    return{
      lang: "zh-CN" ,     //设置默认语言
      typeId: [],
      token: [],
      userInfo:[],
      placeholder1: this.$t('m.account'),
      placeholder2: this.$t('m.account'),
 
    }
  },
  created(){
    this.$store.commit("changLang",this.lang)
    // console.log("语言",this.$store.state.lang)
    // this.lang = this.$store.state.lang
  },
  mounted(){
    if( this.$store.state.userInfo != null ){
       this.$store.commit("loginOut", null)   
       console.log("token不为空,token已清理")
    }else{
      console.log("正常，没有token")
    }
  },
  methods:{
    changeLang(){
      switch(this.lang){
        case "zh-CN": 
          this.lang = "vi-VN" 
          break;
        case "vi-VN": 
          this.lang = "zh-CN" 
          break;
      }
      this.$store.commit("changLang",this.lang)
      this.$i18n.locale = this.$store.state.lang

      this.placeholder1 = this.$t('m.account')
      this.placeholder2 = this.$t('m.account')
      // console.log(this.placeholder1)
    },

    clickSubmit(){
      var account = this.$refs.account.value
      var passWord = this.$refs.paw.value
      if( account == "" ){
        Toast(this.$t('m.loginError'))
        return;
      }
      else if( passWord == "" ){
        Toast(this.$t('m.passwordError'))

        return;
      }
      userLogin({"account": account,"password": passWord})
      .then( res => {
        console.log("用户信息",res)
        if(res.data.code === 200 ){
          this.userInfo = res.data
          this.$store.commit("userDataFromLogin",this.userInfo)
           this.$router.push({
             name:"home",
             query:{
               typeId: this.typeId,
               token: this.token
             }
           })
        
        }else{
          Toast(this.$t('m.LOrPError'))
        }
      })
      .catch( error => {
        console.log("失败",error)
      })
    }
  }
  
}
</script>

<style lang="scss" scoped>
.login{
  height: 100vh;
  width: 100vw;
  display: flex;
  background-image: url("~@/assets/images/beijing.png");
  background-size: 110% 100%;
  background-repeat: no-repeat;
}
.lang{
  position: fixed;
  height:25px;
  width:50px;
  right: 20px;
  top: 24px;
  text-align: center;
  line-height: 25px;
}
.login-box{
  height: 55.8rem;
  width: 108rem;
  display: flex;
  background-color: #FFFFFF;
  margin: auto;
}
.left{
  width: 40.6rem;
  height:33.75rem;
  background-color: #FFFFFF;
  background-image: url("~@/assets/images/login-back.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: auto;
}
.main{
  width: 44%;
  height: 40rem;
  padding-top: 14%;
  padding-left: 5%;
  float: left;
}
.content{
  height: 100%;
  width: 100%;

  .title{
    font-size:30px;
    font-family:PingFang-SC-Medium;
    font-weight:500;
    color:rgba(51,51,51,1);
  }
  .input-box{
    background-color: #FFFFFF;

    .input-item{
      border: 0.5px solid #D2D2D2;
      display: flex;
      justify-content: space-between;
      margin-bottom: 10px;
      padding: 8px;
      margin: auto;
      width: 80%;

      .input{
        width:100%;
      }

      .input-icon{
        width: 35px;
        height: 23px;
        text-align: left;
        margin-top: 10px;
      }
      .auth-code{
        width: 125px;
        height: 38px;
        text-align: left;
        margin-top: 4px;
      }
      .input{
        border: none;

        .phone{
          border: none;
          line-height: 25px;
          height: 45px;
          text-indent: 1em;
          color: #666666;
          width:100%;
        }
      }
    }   
  }

  .submit{
    height: 56px;
    width: 19rem;
    margin: 5.58rem auto;

    .but{
      width: 100%;
      height: 100%;
      background: #4D69F6;
      border: none;
      border-radius: 6px;
      font-size:18px;
      font-family:SourceHanSansCN-Regular;
      font-weight:400;
      color:rgba(255,255,255,1);
    }
  }
}

</style>
