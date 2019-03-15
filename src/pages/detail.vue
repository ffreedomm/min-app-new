<template>
  <div @click="clickHandle">
kkkkk====={{ss.id}}{{ss.name}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      ss: {}
    }
  },

  components: {
  },

  methods: {
  },
  mounted () {
    this.ss = this.$route.query
  },
  created () {
    // let app = getApp()
  }
}
</script>

<style scoped>
</style>
