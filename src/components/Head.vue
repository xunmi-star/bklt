<template>
  <div class="head">
    <div class="title-img">
      <h6 class="tltle">{{$t('m.systemName')}}</h6>
    </div>

    <div class="user-box">
      <div class="user">

        <el-button class="user-lang" round size="medium" ><a @click="changeLang" href="#/home" >{{lang}}</a></el-button>

       <!-- <div class="user-name">
          <select id="sel" @change="loginOut" style="background-color:#1F2F3E; border:none; color:#FFFFFF; height:30px;">
              <option  value="name">{{ name }}</option>
              <option value="signOut">{{$t('m.signOut')}}</option>
          </select>
       </div> -->

       <div class="user-name" @click="clickUserName"><span>{{ name }}</span><i class="el-icon-caret-bottom icon-style" v-show="iconFlag"></i><i class="el-icon-caret-top icon-style" v-show="!iconFlag"></i></div>
        <i class="el-icon-caret-top icon-style2" v-show="!iconFlag"></i>
        <div class="loginOut" v-show="!iconFlag">
          <div class="loginout-text">
            <a href="" style="color:#1F2F3E;font-size:16px;border-bottom: 1px solid #1F2F3E">{{$t('m.signOut')}}</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: "",
      lang: "" ,
      activeNames: ['1'],
      border: false,
      iconFlag: true,
    }
  },
  created(){
    // console.log("store用户信息",this.$store.state.userInfo)
    if( !this.$store.state.userInfo){
      // console.log("用户未登陆")
      this.$router.push("/dist/login")
    }

    this.name = this.$store.state.userInfo.data.name

    this.lang = this.$store.state.lang
    this.$i18n.locale = this.$store.state.lang

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
      //把语言标志传给store仓库
      this.$store.commit("changLang",this.lang)
      console.log("获取到的语言标志",this.$store.state.lang)
      this.$i18n.locale = this.$store.state.lang
      //没有这个跳转的话，side里的两个大标题语言切换不过来
      this.$router.push("admin")    
    },

    loginOut(){
      this.$store.commit("loginOut", null)
      this.$router.push("/dist/login")
    },

    clickUserName(){
      this.iconFlag = !this.iconFlag
    },
  }

}
</script>

<style lang="scss" scoped>
.head{
  height: 8vh;
  width: 100%;
  background-color: #1F2F3E;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title-img{
  height:28.8px;
  background-image: url("~@/assets/images/logo.png");
  background-size: 28.8px 100%;
  background-repeat: no-repeat;
  display: flex;
  margin-left: 3rem;
}
.tltle{
  font-size:20px;
  // font-family:FZZYJW--GB1-0;
  // font-weight:400;
  color:rgba(255,255,255,1);
  text-indent: 5rem;
}
.user-box{
  height: 100%;
}
.user{
  height: 100%;
  display: flex;
  float: right;
  align-items: center;
  justify-content: space-between;


  .user-icon{
    width: 32px;
    height: 32px;

    img{
      height: 100%;
      width: 100%;
    }
  }
  .user-name{
    height: 100%;
    line-height: 80px;
    color: #FFFFFF;
    margin-right: 32px;
    font-size: 18px;
  }
  .user-icon2{
    width: 32px;
    height: 32px;
  }
.lang{
  color: #FFFFFF;
  margin-top: -14px;
  background-color: #1F2F3E;
  border-radius: 5px;
  width: 60px;
  height: 26px;
  line-height: 24px;
}
.user-lang{
  border-radius: 15px;
  margin-right: 39px;

  a{
    color:#2E65FD;
  }
}
}
.a{
  color:#979797;
  text-decoration: none;
}
a:link{
  color:#979797;
}
a:visited{
  color:#979797;
}
a:hover{
  color:#979797;
  background-color:#FFFFFF;
}

.active {
  background: #49545F;
}

.icon-style{
  margin-left: 24px;
}
.icon-style2{
  display: inline-block;
  position: absolute;
  top: 58px;
  right: 69px;
  color: #FFFFFF;
}
.loginOut{
  position:absolute;
  border: none;
  font-size: 16px;
  color: #1F2F3E;
  background:rgba(255,255,255,1);
  box-shadow:3px 0px 9px 0px rgba(172,200,219,0.46);
  right:58px;
  top: 66px;
  width: 86px;
  height: 81px;
  line-height: 81px;
  z-index: 9;
}
</style>

