<template>
  <div>
    <van-notice-bar
      left-icon="https://img.yzcdn.cn/1.png"
      text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。"
    />
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
}
.child {
  width: 100%;
}
</style>
