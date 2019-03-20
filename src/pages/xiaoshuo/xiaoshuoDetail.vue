<template>
  <div class="contain">
    <web-view :src="webUrl"></web-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      webUrl: ""
    };
  },
  mounted() {
    let bid = this.$route.query.bid;
    this.webUrl =
      "http://t.shuqi.com/route.php?pagename=#!/bid/177502/cid/" +
      bid +
      "/ct/read";
  },

  methods: {},

  created() {}
};
</script>

<style scoped>
</style>
