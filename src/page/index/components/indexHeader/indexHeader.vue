<template>
  <div class="index-header">
    <div class="logo">
      <img alt="logo image" src="@/common/images/indexLogo.png"  height="48" />
    </div>
    <div class="indexRight">
      <div class="detail-box">
        <span class="detail-item">
          <i class="iconfont icon-pinglun"></i>
          <span class="num">{{articleList.commentNum}}</span>
        </span>
        <span class="detail-item">
          <i class="iconfont icon-xiangqu"></i>
          <span class="num">{{articleList.loveNum}}</span>
        </span>
        <span class="detail-item">
          <i class="iconfont icon-fenxiang"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexHeader',
  data () {
    return {
    }
  },
  props: {
    articleList: Object
  }
}
</script>

<style lang="stylus" scoped>
.index-header
  width 100%
  box-sizing border-box
  box-shadow .03rem .03rem .04rem #aaaaaa
  height 1.28rem
  display flex
  border-bottom 1px solid #f8f8f8
  .logo
    padding .1rem
    overflow hidden
    img
     padding-left .27rem
  .indexRight
    flex 1
    padding .1rem
    .detail-box
      height 1.28rem
      display flex
      align-items center
      text-align center
      justify-content flex-end
      .detail-item
        width 1.42rem
        position relative
        .iconfont
          font-size 24px
          color #464a4d
        .num
          position absolute
          top 0
          right .07rem
          color rgb(129, 129, 129)
</style>
