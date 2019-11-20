import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'


import login from "../views/Login.vue"

import upload from "../views/Upload.vue"
import admin from "../views/Admin.vue"
import download from "../views/Download.vue"
import error from "../views/Error.vue"


Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  // base: "/dist",
  routes: [
    {
      path: '/',
      name:"temp1",
      redirect:'/dist/login',
    },
    {
      path: '/dist/login',
      name: 'login',
      component: login
    },
    { 
  　　path: '*', 
  　　component: (resolve) => require(['../views/Error.vue'], resolve) 
  　 },
    {
      path: '/home',
      name: 'home',
      component: Home
    },   
    {
      path: "/upload",
      name:"upload",
      component: upload
    },
    {
      path: "/admin",
      name:"admin",
      component: admin
    },
    {
      path: "/download",
      name:"download",
      component: download
    },
    {
      path: "/error",
      name:"error",
      component: error
    },



  ]
})
