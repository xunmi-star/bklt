import axios from 'axios'


const service = axios.create({
  // baseURL: "http://www.lucklyjz.com/",
   baseURL : "http://47.112.117.37:8080/bklt",
  //baseURL: "http://www.lucklyjz.com/bklt",      //正式服
  time: 5000
})

//axios请求拦截器,记得添加   return config
service.interceptors.request.use( config => {
  config.headers['Content-Type' ] = 'application/json'
  config.headers[ 'opSource' ] = 'WEB'

  return config

})

//axios响应拦截器,记得添加  return res
service.interceptors.response.use(
res => {
  const data = res.data;
  // console.log('响应后的输出')
  // console.log(data)
  switch(data.code){
    // case "000000" : console.log('操作成功');break;
    // case "000001" : console.log('系统异常');break;
  }
  return res
},
error => {
  console.log(error) 
  return Promise.reject(error )
}

)

export default service