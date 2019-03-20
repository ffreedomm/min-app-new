<template>
  <div class="item">
    <div
      class="imgItem"
      v-for="(item, index) in items"
      :key="index"
      @click="toDetail(item.title)"
      :style="item.color"
    >
      <text class="text">{{item.title}}</text>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color: "background-color:red"
    };
  },
  props: {
    items: Object
  },
  methods: {
    RandomColor() {
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += ((Math.random() * 16) | 0).toString(16);
      }
      return color;
    },
    toDetail(value) {
      console.log("value", value);
      this.$emit("toDetail", value);
    }
  }
};
</script>

<style>
.item {
  margin-top: 15px;
  width: 750rpx;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
}
.imgItem {
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  border-radius: 20px;
  width: auto;
  background-color: aquamarine;
  margin-top: 15px;
  margin-left: 15px;
}
.text {
  padding-top: 5px;
  padding-left: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  font-size: 20px;
  color: white;
}
</style>
