<template>
     <div class="pop2">
       <button class="search-but" id="mdialog4" @click="updateUser"><span style="width:100%">编辑</span></button>

        <pop2 type='alert' @took='okfall' :upuserID="upuserID" :showstate='showa'>
          <div slot='tlt'>
            <div style="float:right; margin:15px; font-size:25px" @click="okfall"  :showstate='showa'>X</div>
            <br/>
            <div style="display:flex">
              <div style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 18px;">{{$t('m.name')}}:</div>  <input id="name" ref="name" type="text" placeholder=""  style="margin:8px 0;width:323px;padding:11px 8px;font-size:15px; border:1px solid #999;margin-left:38px;border-radius:15px;height: 40px;"/></div>   
              <div style="margin-top:20px;display:flex"><div style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 18px;">{{$t('m.account2')}}:</div>  <input id="account" ref="account" type="text" placeholder=""  style="margin:8px 0;width:323px;padding:11px 8px;font-size:15px; border:1px solid #999;margin-left:38px;border-radius:15px;height: 40px;"/></div>
              <div style="margin-top:20px;display:flex"><div style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 18px;">{{$t('m.password2')}}:</div>  <input id="code" ref="code" type="password" placeholder=""  style="margin:8px 0;width:323px;padding:11px 8px;font-size:15px; border:1px solid #999;margin-left:38px;border-radius:15px;height: 40px;"/></div>
              <div style="margin-top:20px;display:flex"><div style="margin-left:69px;line-height:43px;padding: 11px;height: 40px;font-size: 18px;">{{$t('m.permission')}}:</div><div style="margin:8px 0;width:0px;padding:11px 8px;font-size:15px;margin-left:0px;border-radius:15px;height: 40px;font-size:18px;"/>
              <form action="" method="get">
                <label style="margin-left:20px;font-size:16px"><input id="create" name="Fruit" style="margin-left:5px" type="checkbox" value="" />{{$t('m.OpenAccount')}} </label>
                <label style="margin-left:20px;font-size:16px"><input id="upload" name="Fruit" type="checkbox" value="" />{{$t('m.upload')}} </label>
                <label style="margin-left:20px;font-size:16px"><input id="select" name="Fruit" type="checkbox" value="" />{{$t('m.demand')}} </label>  
              </form>
              </div>
          </div>
        </pop2>
     </div> 
</template>

<script>
import $ from "jquery"
import axios from "axios"
import pop2 from "../components/Pop2.vue"
export default {
  components:{
    pop2,
  },
  data(){
    return{
      log: [],
      showa:false,
      showc:false,
      upuserID:123,
      msg:"",
      adminList:[],
    }
  },
  methods:{
    updateUser(){
      this.showa=true;
    },
    ok1(){
      this.showa=false;
    },
    okfall(){
      this.showa=false;
    },
    cancelfall(){
      this.showc=false;
    },  
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
  border: none;
  background-color: #FFFFFF;
  margin-left: 20px;
  font-weight:400;
  font-size:14px;
  font-family:PingFang-SC-Regular;
  font-weight:400;
  color:rgba(103,103,103,1);
  line-height:24px;
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

.ruler{
  height: 100%;
  width: 100%;
  display:flex;
  flex-wrap: wrap;
  align-items: center;
}
.ruler-item{
  height: 30px;
  width: 100%;
  text-indent: 4em;
  line-height: 30px;
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
</style>
