<template>
  <div class="item" @click="toDetails">
    <div class="box">
      <image class="img" :src="item.cover" mode='widthFix'></image>
      <div class="textBox">
        <text class="bookName">{{item.title}}</text>
        <text class="author">作者：{{item.author}}</text>
        <text class="category"> 分类：{{item.category}}</text>
        <text class="tags"> 标签：{{item.tags}}</text>
      </div>
    </div>
    <text class="desc">{{item.desc}}</text>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item: Object
  },
  methods: {
    toDetails() {
      this.$emit("toDetail", this.item);
    }
  }
};
</script>

<style>
.item {
  width: 750rpx;
  display: flex;
  flex-direction: column;
}
.box {
  width: 750rpx;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
}
.img {
  margin-left: 25px;
  width: 126px;
  border-radius: 8px;
}
.textBox{
  width: 750rpx;
  display: flex;
  flex-direction: column;
  margin-left: 25px;

}
.line{
  margin-top: 8px;
  width: 750rpx;
  height: 12px;
  background-color:#E0E0E0;
  opacity: 0.5;
}
.bookName{
  font-size: 18px;
  margin-top: 10px;
  font-weight: 600;
}
.author{
  font-size: 12px;
  margin-top: 5px;
  color: green
}
.category{
  font-size: 12px;
  margin-top: 5px;
  color: red
}
.tags{
  font-size: 12px;
  margin-top: 5px;
  color: gray;
}
.desc{
  color: grey;
  font-size: 10px;
  margin-left: 12px;
  margin-top: 6px;
  padding-right: 18px;
  text-indent: 12px;
}
</style>
