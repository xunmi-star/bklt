<template>
<div class="upload">

<div class="upload-info">
  <el-upload class="upload-demo" ref="upload" action="doUpload" :limit="1" :file-list="fileList" :before-upload="beforeUpload">
  <el-button class="search-but" slot="trigger" size="small" type="primary">{{ this.$t("m.upload") }}</el-button>
  </el-upload> 
  <span slot="footer" class="dialog-footer">
  </span>
  <!-- <button class="search-template"><a class="link-url" href="http://www.lucklyjz.com/bklt/download">{{$t('m.downloadFile')}}</a></button> -->
  <button class="search-template"><a class="link-url" href="http://47.112.117.37:8080/bklt/download">{{$t('m.downloadFile')}}</a></button>
</div>


  <div class="bottom" style="top:97px;height:82%">
    <div class="search-head">
      <table style="width: 100%;line-height: 4.75rem;font-size:16px">
        <tr style="width: 100%;">
          <th width="20%">{{$t('m.day')}}</th>
          <th width="20%">{{$t('m.accountName2')}}</th>
          <th width="20%">{{$t('m.uploadSucc')}}</th>
          <th width="20%">{{$t('m.repeatData')}}</th>
          <th width="20%" :title="info">{{$t('m.uploadAmount')}}</th>
        </tr>
      </table>
    </div>
    <div class="search-main">
      <div class="search-content">
        <table style="width: 100%;height: 100%;line-height: 4.75rem;font-size:14px;border:#D2D2D2" rules=rows>
          <tr style="width: 100%;" v-for="item in log" :key="item.id">
            <td width="20%" class="em2">{{item.uploadTime | dateformat('YYYY-MM-DD HH:mm:ss') }}</td>
            <td width="20%">{{item.userName}}</td>
            <td width="20%">{{item.success}}</td>
            <td width="20%">{{item.repeat}}</td>
            <td width="20%">{{item.uploadNumber}}</td>
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


      <!-- <pop4 :pop4Data="{fileFormData,requestConfig}" type='confirm' @took='okfall2' @tocancel='cancelfall' :showstate='showc'>
        <div slot='tlt'>
          <div style="display:flex">
          </div>           
        </div>
      </pop4> -->

    </div>
  </div>
</div>
</template>

<script>
import {getUploadLogByUser,uploadBlack} from "@/api/home/index.js"
import { MessageBox } from 'mint-ui';
import { Toast ,Dialog} from 'vant';
// import $ from "jquery"
import axios from "axios"
import md5 from "js-md5"
// import pop4 from '@/components/Pop4.vue'
export default {
  components: { 
    // pop4
  },
  data(){
    return{
      log: [],
      upToken:'',
      flag: true,
      length: 1,
      page: 1,
      info: "鼠标悬停事件",
      fileList: [],
      headers:{},
      fileName:"",
      showa:false,
      showc:false,
      placeholder: this.$t('m.inputDownloadPassword'),
      fileFormData: {},
      requestConfig:{},
    }
  },
  mounted(){
    let id = this.$store.state.id
    let token = this.$store.state.userInfo.token
    this.upToken = token

    this.headers = { token: token }

    let sign = md5("WEB" + id)
    var headers = {
      "sign":sign,
      "token":token,
    }
    getUploadLogByUser({"userId":id, "page":1},headers)
    .then( res=>{
      console.log("黑名单上传页日志",res)
      this.log = res.data.data
      this.length = res.data.page
      if(res.data.data.length != 0){
        this.flag = false
      }
    })
    .catch( error=>{console.log(error)})

  },

  methods:{
    submitUpload2(){   
      this.showc=true;  
    },
    okfall(){
      this.showa=false;
    },
    okfall2(){
      this.showc=false;
    },
    cancelfall(){
      this.showc=false;
    },


    beforeUpload(file){
      this.files = file;
      const extension = file.name.split('.')[1] === 'xls'
      const extension2 = file.name.split('.')[1] === 'xlsx'
      const isLt2M = file.size / 1024 / 1024 < 5
      if (!extension && !extension2) {
        Toast(this.$t('m.fileType'))
        return
      }
      if (!isLt2M) {
        Toast(this.$t('m.fileSize'))
        return
      }
      this.fileName = file.name;


      Dialog.confirm({
        title: this.$t("m.doubt"),
        message: this.$t("m.fileName") + file.name ,
        cancelButtonText: this.$t("m.cancel"),
        confirmButtonText: this.$t("m.determine") 
      })


      .then(() => {
        let fileFormData = new FormData();
          fileFormData.append("token", this.$store.state.userInfo.token);
          fileFormData.append('file', this.files, this.fileName);//filename是键，file是值，就是要传的文件，test.zip是要传的文件名
          let sign = md5("WEB" + this.$store.state.id)
          
          var requestConfig = {
            "sign": "", sign,
            'opSource'  : 'WEB',
            "token":this.$store.state.userInfo.token,
          }
          this.fileFormData = fileFormData
          this.requestConfig = requestConfig

          uploadBlack(fileFormData,requestConfig)
          .then((res) => {
            console.log("成功的回调",res)
            if(res.data.code == 200){
              Toast.success(this.$t("m.sum") + res.data.sum +  "\r\n" + this.$t("m.successSum")  + res.data.success + "\r\n" +this.$t("m.repeatSum") + res.data.repeat)

              this.$router.go(0)

            }else{
              Toast(res.data.msg);
            }
          }) 
          .catch(error => {
            console.log("失败的回调",error)
          })
        })
      .catch(() => {
        
      });

      return false // 返回false不会自动上传
      },


    changepage(){
      console.log("页码改变",this.page)
      let id = this.$store.state.id
      let token = this.$store.state.userInfo.token
      this.upToken = token
      let sign = md5("WEB" + id)
      var headers = {
        "sign":sign,
        "token":token,
      }
      getUploadLogByUser({"userId":id, "page":this.page},headers)
      .then( res=>{
        console.log("黑名单上传页日志",res)
        this.log = res.data.data
        if(res.data.data.length != 0){
          this.flag = false
        }
      })
      .catch( error=>{console.log(error)})
    },
  }
}
</script>

<style lang="scss" scoped>
.upload{
  width:100%;
}
.upload-info{
  display: flex;
  margin-top: 30px;
}
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
  width: 13.4rem;
  font-size: 18px;
  border: none;
  border-radius: 15px;
  margin-left: 2.3rem;
  color: #2E65FD;
  background-color: #EEEEEE;
  background-image: url("~@/assets/images/download.png");
  background-size: 28px 28px;
  background-repeat: no-repeat;
  background-position: 0.8rem 1.0rem;
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

.em2{
  text-indent: -2em;
}
.search-content td{
  text-align: center;
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

</style>
