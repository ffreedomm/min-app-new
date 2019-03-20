<template>
  <div class="contain">
    <i-index
      v-for="(item, index) in 12"
      :key="index"
      full
      title="卡片标题"
      extra="额外内容"
      thumb="https://i.loli.net/2017/08/21/599a521472424.jpg"
    >
      <view slot="content">{{detail.imgSrc}}</view>
      <view slot="footer">{{detail.imgText}}</view>
    </i-index>
  </div>
</template>

<script>
export default {
  data() {
    return {
      detail: {}
    };
  },

  methods: {},
  mounted() {
    this.detail = this.$route.query;
  },
  created() {}
};
</script>

<style scoped>
.contain {
  width: 100%;
  height: 100%;
}
.child {
  width: 100%;
  height: 100%;
}
</style>
