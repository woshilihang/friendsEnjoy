<template>
  <div>
    <div class="m-tabbar">
      <router-link to="/index" tag="a" class="m-tabbar-item">
        <span class="m-tabbar-item-icon">
          <i class="iconfont icon-homepage"></i>
        </span>
        <span class="m-tabbar-item-text">
          首页
        </span>
      </router-link>
      <router-link to="/community/recommend" tag="a" class="m-tabbar-item">
        <span class="m-tabbar-item-icon">
          <i class="iconfont icon-zhinan"></i>
        </span>
        <span class="m-tabbar-item-text">
          友享
        </span>
      </router-link>
      <router-link to="/my" tag="a" class="m-tabbar-item">
        <span class="m-tabbar-item-icon">
          <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntouxianxing"></i>
        </span>
        <span class="m-tabbar-item-text">
          我的
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarsBottom'
}
</script>

<style lang="stylus" scoped>
.m-tabbar
  display flex
  flex-direction row
  position fixed
  bottom 0
  left 0
  right 0
  width 100%
  box-sizing border-box
  overflow hidden
  height 1.33rem
  background-color #ffffff
  border-top 1px solid #e4e4e4
  .m-tabbar-item
    flex 1
    text-align center
    .m-tabbar-item-icon
      display block
      padding .23rem 0 .05rem 0
      i
        font-size .6rem
    .m-tabbar-item-text
      display block
      font-size 12px
      color #949494
  .router-link-active
    color #000
    .m-tabbar-item-text
      color #000
</style>
