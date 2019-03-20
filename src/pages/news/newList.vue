<template>
      <van-tabs sticky="true">
          <van-tab :title="key" v-for="(value, key, index) in data" :key="index">
            <blok v-for="(item, index2) in value" :key="index2" class="item">
              <image class="img" :src="item.picInfo.length == 0 ?  defaultImg : item.picInfo[0].url" mode='widthFix'></image>
              <div class="bottom">
              <text class="title">{{item.title}}</text>
              <text class="text">{{item.ptime}}</text>
              </div>
            </blok>
          </van-tab>
      </van-tabs>
</template>

<script>
export default {
  data() {
    return {
      defaultImg: "http://img2.3lian.com/2014cf/f4/90/d/158.jpg",
      searchValue: "",
      isShowLoading: false,
      data: {},
      userInfo: {}
    };
  },
  mounted() {
    this.getData();
  },
  components: {},
  /**
   * 监听下拉事件
   */
  onPullDownRefresh() {
    this.isShowLoading = true;
    console.log("下拉刷新");
    wx.stopPullDownRefresh;
  },

  /**
   *监听上拉加载
   */
  onReachBottom() {
    this.isShowLoading = true;
    console.log("上拉加载");
  },

  methods: {
    getData() {
      this.$http.get("https://www.apiopen.top/journalismApi", {}).then(res => {
        this.data = res.data;
      });
    },

    onSearch(value) {
      this.searchValue = value.mp.detail;
      console.log("event.detail", value.mp.detail);
    },
    onCancel() {
      console.log("onCancel");
    },
    onChange(value) {
      this.searchValue = value.mp.detail;
      console.log("event.detail", value.mp.detail);
    },

    getUserInfo() {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: res => {
              this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    clickHandle() {
      let params = {
        id: 1,
        name: "ssssss44s"
      };
      this.$http.get("/getuser", params);
      this.$http.get("/getuser", params).then(res => {});
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
.contain{
  padding-top: 100px;
}
.img{
  width: 100%
}
.bottom{
  display: flex;
  flex-direction: column
}
.text{
  font-size: 12px;
  color: #555;
  margin-left: 220px;
}
.title{
 font-size: 15px;
  color: #555
}
</style>
