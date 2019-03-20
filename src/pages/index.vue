<template>
  <div>
    <NavigationBar title="首页"/>
    <swiper class="swiper"
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <block v-for="(item, index) in imgUrls" :key="index">
        <swiper-item>
          <image :src="item"></image>
        </swiper-item>
      </block>
    </swiper>
    <van-notice-bar
      left-icon="http://img2.imgtn.bdimg.com/it/u=1141432067,4033959809&fm=214&gp=0.jpg"
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
    />
    <indexItem :items="arrs" v-on:toDetail="toDetail"/>
  </div>
</template>

<script>
import indexItem from "@/components/indexItem";
export default {
  data() {
    return {
      imgUrls: [
        "http://img2.3lian.com/2014cf/f4/90/d/158.jpg",
        "http://img2.3lian.com/2014cf/f4/90/d/159.jpg",
        "http://img2.3lian.com/2014cf/f4/90/d/160.jpg"
      ],
      indicatorDots: true,
      autoplay: true,
      interval: 3000,
      duration: 1000,
      arrs: []
    };
  },

  components: {
    indexItem,
  },
  onLoad() {
    for (let i = 0; i < 9; i++) {
      this.arrs[i] = {
        imgSrc: "http://imgsrc.baidu.com/forum/w%3D580%3B/sign=93c716cf9fcad1c8d0bbfc2f4f056509/d1160924ab18972b778e062aeccd7b899f510a9d.jpg",
        imgText: "测试" + i
      };
    }
  },

  methods: {
    toDetail(index){
      let targetPage = "";
      switch(index){
        case 0: targetPage="/pages/news/newList";break
        case 1: targetPage="/pages/xiaoshuo/xiaoshuoList";break
        case 2: targetPage="/pages/detail";break
        case 3: targetPage="/pages/detail";break
        case 4: targetPage="/pages/detail";break
        case 5: targetPage="/pages/detail";break
        case 6: targetPage="/pages/detail";break
        case 7: targetPage="/pages/detail";break
        case 8: targetPage="/pages/detail";break
        default: targetPage="";break
      }
        //this.navigationPush("/pages/xiaoshuo/xiaoshuoList",this.arrs[index]);
        this.navigationPush(targetPage,this.arrs[index]);
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
    }
  },

  created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
};
</script>

<style scoped>
.swiper{
  width: 100%;
}
  .swiper image{
width: 100%;
  }
.notice {
  margin-left: 8px;
  color: red;
  font-size: 15px;
}
</style>
