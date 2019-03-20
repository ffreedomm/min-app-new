<template>
      <div class="item">
        <image class="img" :src="item.imgSrc" v-for="(item, index) in items" :key="index" 
        @click="toDetail(index)"></image>
      </div>
</template>

<script>
export default {
  props: {
    items: Object
  },
  methods:{
      toDetail(index){
          this.$emit("toDetail",index);
      }
  }
}
</script>

<style>
.item{
    margin-top: 15px;
    width: 100%;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
}
.imgItem{
    width: 220rpx;
    height: 220rpx;
    flex-direction: column;
    display: flex;
    align-items: center;
    align-content: center;
    margin-top: 9px;
    
}
.img{
    align-content: center;
    align-items: center;
    width: 220rpx;
    height: 220rpx;
    border-radius: 100px;
    margin-top: 10px;
    margin-left: 12px;
}
.textStyle{
    height: 30px;
    line-height: 30px;
    font-size: 15px;
}
</style>
