<template>
<div class="side"> 

  <div class="list">

    <div  class="list1" @click="clickList1" >
      <div class="title" :class="{'class1':flag1,'class2':!flag1}">
        <div class="left-icon"></div>
        <div class="right">
          <div class="text">{{$t('m.blackManage2')}}</div>
          <div class="right-icon">
          <svg v-show="!open1" t="1563516722048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2795" width="18" height="15"><path d="M1024 256L512 768 0 256h1024z" p-id="2796" fill="#979797"></path></svg>          
          <svg v-show="open1" t="1563516971028" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2970" width="18" height="15"><path d="M510.746 245.308c5.248 0 10.266 2.15 13.876 5.939l441.19 461.978c5.299 5.58 6.784 13.748 3.763 20.813s-9.958 11.648-17.638 11.647h-882.304c-7.681 0-14.618-4.581-17.638-11.647s-1.536-15.258 3.763-20.813l441.114-462.003c3.61-3.763 8.627-5.914 13.875-5.914z" p-id="2971" fill="#979797"></path></svg>
          </div>
        </div>
      </div>

      <div class="list-info" v-show="open1">
        <router-link to="/home" tag="div" class="list-item" active-class="active">
          <div class="item-icon1"></div>
          <button class="item-content">{{$t('m.blackDemand')}}</button>
        </router-link>
        <router-link to="/upload" tag="div" class="list-item" active-class="active">
          <div class="item-icon2"></div>
          <button class="item-content">{{$t('m.blackUpload')}}</button>
        </router-link>
        <router-link to="/download" tag="div" class="list-item" active-class="active" v-if="$store.state.userInfo.data.role">
          <div class="item-icon3"></div>
          <button class="item-content">{{$t('m.blackdownload')}}</button>
        </router-link>
      </div>
    </div>

    <div  class="list2" @click="clickList2">
      <div class="title" :class="{'class1':flag2,'class2':!flag2}">
        <div class="left-icon2"></div>
        <div class="right">
          <div class="text">{{$t('m.accountManage')}}</div>
          <div class="right-icon">
            <svg v-show="!open2" t="1563516722048" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2795" width="18" height="15"><path d="M1024 256L512 768 0 256h1024z" p-id="2796" fill="#979797"></path></svg>         
            <svg v-show="open2" t="1563516971028" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2970" width="18" height="15"><path d="M510.746 245.308c5.248 0 10.266 2.15 13.876 5.939l441.19 461.978c5.299 5.58 6.784 13.748 3.763 20.813s-9.958 11.648-17.638 11.647h-882.304c-7.681 0-14.618-4.581-17.638-11.647s-1.536-15.258 3.763-20.813l441.114-462.003c3.61-3.763 8.627-5.914 13.875-5.914z" p-id="2971" fill="#979797"></path></svg>
         </div>
        </div>
      </div>

      <div class="list-info" v-show="open2">
        <router-link to="/admin" tag="div" class="list-item" active-class="active">
          <div class="list2-icon2"></div>
          <button class="item-content">{{$t('m.accountManage')}}</button>
        </router-link>
      </div>
    </div>


  </div>

</div>
</template>

<script>
export default {
data(){
  return{
    open1: true,      //折叠表单默认展开
    open2: true,
    flag1: true,      //折叠表单一默
    flag2: false,      //折叠表单一默认

    title: '',
    title2: '',
    userInfo:[],
  }
},
mounted(){
  this.userInfo = this.$store.state.userInfo.data
},
methods:{
  clickList1(){
    this.flag1 = true
    this.flag2 = false
    this.open1 = !this.open1
    console.log("1111111")
  },
  clickList2(){
    this.flag1 = false
    this.flag2 = true
    this.open2 = !this.open2
    console.log("open1",this.open1)
    console.log("open2",this.open2)
    console.log("2222222")
  }
},

}
</script>


<style lang="scss" scoped>
.side{
  height: 92vh;
  width: 15.4rem;
  background:#1F2F3E;
  font-size: 16px;
  color: #979797;
}
//高亮设置
.class1{
  background: #49545F;      //高亮颜色
}
.class1:before{
  content: "";
    height: 0;
    width: 0;
    display: block;
    font-size: 10px;
    z-index: 2;
    border-left: 1.5px solid #FFFFFF;
    border-top: 60px solid #FFFFFF;
}
.class2{
  background: #1F2F3E;
}

.list{
  position:relative;
}
.title{
  height: 60px;
  width:100%;
  top:5%;
  display: flex;
  justify-content: space-between;
  
}
.title .left-icon{
  width: 30%;
  height:100%;
  background-image: url("~@/assets/images/guanli.png");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 13px 18px;
}
.title .left-icon2{
  width: 25%;
  height:100%;
  background-image: url("~@/assets/images/zhanghao.png");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 13px 18px;
}
.list2-icon2{
  width: 30%;
  height: 100%;
  background-image: url("~@/assets/images/zhanghao.png");
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: 13px 18px;
}
.title .right{
  width:70%;
  height:100%;
  display: flex;
  justify-content: space-between;
}
.right .text{
  width: 75%;
  height: 100%;
  line-height: 60px;
  text-align: left;
  color: #979797;
}
.right .right-icon{
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
}

.list-info{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  color: #979797;
}
.list-item{
  width:100%;
  height:60px;
  display: flex;
  align-items: center;

  .item-icon1{
    width: 30%;
    height: 100%;
    background-image: url("~@/assets/images/chaxun.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 13px 18px;

  }
  .item-icon2{
    width: 30%;
    height: 100%;
    background-image: url("~@/assets/images/shangchuan.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 13px 18px;

  }
  .item-icon3{
    width: 30%;
    height: 100%;
    background-image: url("~@/assets/images/xiazai.png");
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: 13px 18px;

  }
  .item-content{
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: #1F2F3E;
    border: none;
    // color: #979797;
  }
}
.active{
  color: #FFFFFF;
}
.active2{
  background: #49545F;
  color: #FFFFFF;
}
.active2:before{
  content: "";
    height: 0;
    width: 0;
    display: block;
    font-size: 10px;
    z-index: 2;
    border-left: 1.5px solid #FFFFFF;
    border-top: 60px solid #FFFFFF;
}
</style>


  