<template>
  <router-link to="/addArticle" tag="div" class="addButton">
    <i class="iconfont icon-hao"></i>
  </router-link>
</template>

<script>
export default {
  name: 'addButton'
}
</script>

<style lang="stylus" scoped>
.addButton
  display flex
  align-items center
  justify-content center
  z-index 1000
  width 1.25rem
  height 1.25rem
  position fixed
  bottom 2.1rem
  right  .72rem
  border-radius 50%
  background rgb(75, 79, 91)
  i
    font-size .38rem
    color #ffffff
</style>
