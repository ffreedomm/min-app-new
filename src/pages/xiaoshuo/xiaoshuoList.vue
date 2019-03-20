<template>
  <div class="contain">
    <div class="searchbar">
      <van-search
        :value="searchValue"
        placeholder="请输入搜索关键词"
        show-action
        :search="onSearch"
        :cancel="onCancel"
        v-on:change="onChange"
      />
    </div>
    <scroll class="scroll">
      <tag :items="data" v-on:toDetail="toDetail"></tag>
    </scroll>
  </div>
</template>

<script>
import tag from "@/components/tag";
export default {
  config: {
    usingComponents: {
      "van-search": "vant/search/index", //搜索
      "van-tag": "vant/tag/index"
    }
  },
  data() {
    return {
      searchValue: "",
      data: []
    };
  },
  mounted() {
    this.getData();
  },
  components: { tag },
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
    toDetail(value) {
      this.navigationPush("/pages/xiaoshuo/xiaoshuoItem", { iName: value });
    },
    RandomColor() {
      var color = "background-color:#";
      for (var i = 0; i < 6; i++) {
        color += ((Math.random() * 16) | 0).toString(16);
      }
      return color;
    },
    getData() {
      this.$http
        .get(
          "https://www.apiopen.top/novelSearchApi?name=" + this.searchValue,
          {}
        )
        .then(res => {
          if (res.data.length > 0) {
            for (let i = 0; i < res.data.length; i++) {
              let temp = {
                color: this.RandomColor(),
                title: res.data[i]
              };
              this.data.push(temp);
            }
          }
        });
    },

    onSearch(value) {
      this.data = [];
      this.searchValue = value.mp.detail;
      this.getData();
    },
    onCancel() {
      console.log("onCancel");
    },
    onChange(value) {
      this.data = [];
      this.searchValue = value.mp.detail;
      this.getData();
    }
  },

  created() {}
};
</script>

<style scoped>
.contain {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.searchbar {
  width: 100%;
  position: fixed;
  height: 0px;
}
.scroll {
  width: 100%;
  margin-top: 44px;
}
.name {
  width: 100%;
}
</style>
