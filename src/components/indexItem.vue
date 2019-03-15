<template>
      <div class="item">
          <div class="imgItem" v-for="(item, index) in items" :key="index">
                <image class="img" :src="item.imgSrc"></image>
                <text calss="text"> 
                    {{item.imgText}}
                </text>
          </div>
      </div>
</template>

<script>
export default {
  props: {
    items: Object
  }
}
</script>

<style>
.item{
    width: 375px;
    flex-direction: row;
    display: flex;
    flex-wrap: wrap;
}
.imgItem{
    width: 110px;
    height: 110px;
    flex-direction: column;
    display: flex;
    align-items: center;
    border-style: solid;
    border-width: 1px;
    border-color: #888;
    margin-left: 9px;
    margin-top: 9px;
    
}
.img{
    padding-top: 15px;
    width: 38px;
    height: 38px;
}
.text{
    height: 30xp;
    margin-top: 10px;
    font-size: 13pt;
}
</style>
