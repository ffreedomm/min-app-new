<template>
<div>
    <image class= "img" mode="widthFix" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552582991094&di=b8a0e59c43996a0189057bf4e37e527b&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F10%2F20180610204520_jeirh.jpeg"></image>
</div>
</template>

<script>
export default{
    created(){
      let that = this;
      let timer = setTimeout(() => {
       clearTimeout(timer);
       that.navigationToTabBar("/pages/index");
     }, 3000)
    },
   onLoad () {
  },
  methods:{
    toIndex(){
    }
  }
}
</script>

<style scoped>

.img{
  width: 100%;
  /* height: 100%; */
  background-color: aquamarine
}
</style>