<template>
  <div class="contain">
    <swiper
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item" class="slide-image" width="375" height="150">
        </swiper-item>
      </block>
    </swiper>
    <indexItem :items="arrs"/>
    <text class="notice">通知：请好好的背诵诗词！！！</text>
  </div>
</template>

<script>
import card from "@/components/card";
import indexItem from "@/components/indexItem";
export default {
  mpType: "page",

  data() {
    return {
      imgUrls: [
        "https://clubimg.club.vmall.com/data/attachment/forum/201510/13/165656da3tah0raait2adv.png",
        "https://clubimg.club.vmall.com/data/attachment/forum/201510/13/165656da3tah0raait2adv.png",
        "https://clubimg.club.vmall.com/data/attachment/forum/201510/13/165656da3tah0raait2adv.png"
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      arrs: []
    };
  },

  components: {
    card,
    indexItem
  },

  mounted() {
    for (let i = 0; i < 9; i++) {
      this.arrs[i] = {
        imgSrc: "/static/tabs/orders-active.png",
        imgText: "测试" + i
      };
    }
  },

  methods: {
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
      // let params = {
      //   id: 1,
      //   name: 'ssssss44s'
      // }
      this.navigationPush("/pages/logs");
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
.notice {
  margin-left: 8px;
  color: red;
  font-size: 15px;
}
</style>
