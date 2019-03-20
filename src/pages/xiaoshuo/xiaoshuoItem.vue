<template>
  <div class="contain">
    <BookCell v-for="(item, index) in data" :key="index" :item="item" v-on:toDetail="toDetail"/>
  </div>
</template>

<script>
import BookCell from "@/components/xiaoshuoCell";
export default {
  config: {
    usingComponents: {
      //"van-card": "vant/card/index"
    }
  },
  data() {
    return {
      iName: "",
      data: []
    };
  },
  mounted() {
    this.iName = this.$route.query.iName;
    this.getData();
  },
  components: { BookCell },

  methods: {
    getData() {
      this.$http
        .get("https://www.apiopen.top/novelInfoApi?name=" + this.iName, {})
        .then(res => {
          this.data = res.data.data;
        });
    },
    toDetail(item) {
      this.navigationPush("/pages/xiaoshuo/xiaoshuoDetail", item.bid);
    }
  },

  created() {},

  onLoad() {
    this.data = [];
  }
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
