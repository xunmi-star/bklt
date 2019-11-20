import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './stroe/index.js'
//时间过滤器
import moment from 'moment'
Vue.filter('dateformat', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  return moment(dataStr).format(pattern)

})

//vant-ui 框架
import 'vant/lib/index.css'
import { Icon, DropdownMenu, DropdownItem, Collapse, CollapseItem,Toast,Dialog } from 'vant';
Vue.use(Icon).use(DropdownMenu).use(DropdownItem).use(Collapse).use(CollapseItem).use(Toast).use(Dialog)

//element-ui 框架
import 'element-ui/lib/theme-chalk/index.css';
import {Table,TableColumn,Pagination,Button,Upload,Popover} from "element-ui"
Vue.use(Table).use(TableColumn).use(Pagination).use(Button).use(Upload).use(Popover)

//mint-ui 框架
import "mint-ui/lib/style.css"


// 引入国际化插件
import VueI18n from 'vue-i18n'
Vue.use(VueI18n) 

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  //this.$i18n.locale // 通过切换locale的值来实现语言切换
  messages: {
     'zh-CN': require('@/assets/lang/zh'),   // 中文语言包
     'vi-VN': require('@/assets/lang/vi')    // 英文语言包
  }
})

new Vue({
  router,
  i18n,  //国际化
  store,
  mounted(){
    window.addEventListener('unload', this.saveState)
  },
  methods:{
    saveState () {
      sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    }
  },
  render: h => h(App)
}).$mount('#app')



 
