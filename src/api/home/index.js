import request from '../../tools/request/index.js'

// 1.登录
export function userLogin (data,method="post") {
  return request( {
    url: '/userLogin',
    method,
    data
  } )
}

//2.黑名单查询
export function getBlack (data,headers) {
  return request( {
    url: '/getBlack',
    method: "post",
    data,
    headers:headers
  } )
}

//3.黑名单上传日志
export function getUploadLogByUser (data,headers) {
  return request( {
    url: '/getUploadLogByUser',
    method: "post",
    data,
    headers:headers
  } )
}

//3-1.黑名单上传
export function uploadBlack (data,headers) {
  return request( {
    url: '/uploadBlack',
    method: "post",
    data,
    headers:headers
  } )
}


//4. 黑名单下载日志
export function getDownloadLogByUser (data,headers) {
  return request( {
    url: '/getDownloadLogByUser',
    method: "post",
    data,
    headers:headers
  } )
}

// 5. 账号管理页的用户信息
export function getUsers (data,headers) {
  return request( {
    url: '/getUsers',
    method: "post",
    data,
    headers:headers
  } )
}

// 6. 启用  / 停用
export function updateUserState (data,headers) {
  return request( {
    url: '/updateUserState',
    method: "post",
    data,
    headers:headers
  } )
}

// 7. 新增账号
export function createUser (data,headers) {
  return request( {
    url: '/createUser',
    method: "post",
    data,
    headers:headers
  } )
}

// 7. 编辑账号
export function updateUser (data,headers) {
  return request( {
    url: '/updateUser',
    method: "post",
    data,
    headers:headers
  } )
}

// 7. 校验密码
export function chackPWD (data,headers) {
  return request( {
    url: '/chackPWD',
    method: "post",
    data,
    headers:headers
  } )
}








