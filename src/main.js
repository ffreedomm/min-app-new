import Vue from 'vue'
import MpvueRouterPatch from 'mpvue-router-patch'
import App from '@/App'
import store from '@/store'
import http from '@/utils/httputils'; //导入封装好的http

// 网络请求的配置
Vue.prototype.$http = http;
// vue路由的配置
Vue.use(MpvueRouterPatch)
Vue.config.productionTip = false

Vue.mixin({
  methods: {
    // 页面跳转
    navigationPush(pagePath, params = {}) {
      this.$router.push({
        path: pagePath,
        query: params
      })
    },

    /**
     * 切换至 tabBar 页面
     * @param {*} pagePath 
     */
    navigationToTabBar(pagePath) {
      this.$router.push({
        path: pagePath,
        isTab: true
      })
    },

    /**
     * 返回页面-
     * @param {*} lastNumPage 返回上一页面或多级页面，n 为回退层数，默认值为 1
     */
    goBack(lastNumPage = 1) {
      this.$router.go(lastNumPage);
    }


  }
})

const app = new Vue({
  mpType: 'app',
  store,
  ...App
})
app.$mount()
