<script>
export default {
  globalConfig: {
    usingComponents: {
      "van-notice-bar": "vant/notice-bar/index", //通知
      "van-search": "vant/search/index", //搜索
      "van-loading": "vant/loading/index", //加载
      "van-tab": "vant/tab/index",
      "van-tabs": "vant/tabs/index"
    }
  },
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync("logs") || [];
    logs.unshift(Date.now());
    wx.setStorageSync("logs", logs);
  }
};
</script>

<style>
.container {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
/* this rule will be remove */
/* * {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
} */
</style>
