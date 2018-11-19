<template>
  <div class="bg">
    <div class="my-header">
      <div class="my-msg cf">
        <div class="img-box">
          <img src="./avatar.jpg" alt="用户头像" width="65" height="65" />
        </div>
        <div class="my-info">
          <p class="my-tel">182****2194</p>
          <p class="my-detail">
            点击查看个人主页
          </p>
        </div>
      </div>
      <div class="my-intro">
        <div class="intro-item">
          <span class="item subscribe">
            0
          </span>
          <span class="desc">
            订阅
          </span>
        </div>
        <div class="intro-item">
          <span class="item words">
            0
          </span>
          <span class="desc">
            句子
          </span>
        </div>
        <div class="intro-item">
          <span class="item love">
            0
          </span>
          <span class="desc">
            喜欢
          </span>
        </div>
      </div>
    </div>
    <div class="my-content">
      <div class="content-item">
        <div class="item-img">
          <i class="iconfont icon-xiaoxi"></i>
        </div>
        <p>我的消息</p>
      </div>
      <div class="content-item">
        <div class="item-img">
          <i class="iconfont icon-shuqianbiaozhubiaojizhengshurenzhengxianxing"></i>
        </div>
        <p>我的收藏夹</p>
      </div>
      <div class="content-item">
        <div class="item-img">
          <i class="iconfont icon-pinglun"></i>
        </div>
        <p>我的评论</p>
      </div>
    </div>
    <div class="my-content">
      <div class="content-item">
        <div class="item-img">
          <i class="iconfont icon-changjianwenti"></i>
        </div>
        <p>常见问题</p>
      </div>
      <div class="content-item">
        <div class="item-img">
          <i class="iconfont icon-fankui"></i>
        </div>
        <p>我要反馈</p>
      </div>
      <div class="content-item">
        <div class="item-img">
          <i class="iconfont icon-tuijian1"></i>
        </div>
        <p>推荐友享</p>
      </div>
    </div>
    <div class="my-content">
      <div class="content-item">
        <div class="item-img">
          <i class="iconfont icon-shezhi"></i>
        </div>
        <p>设置</p>
      </div>
    </div>
    <tab-bar-bottom></tab-bar-bottom>
  </div>
</template>

<script>
import TabBarBottom from '@/base/tabBarBottom/tabBarBottom'
export default {
  name: 'My',
  data () {
    return {}
  },
  components: {
    TabBarBottom
  }
}
</script>

<style lang="stylus" scoped>
.bg
  background-color #f3f3f3
  .my-header
    padding .35rem .2rem
    background-color #ffffff
    .my-msg
      clear both
      overflow hidden
      display flex
      padding 0 .42rem
      .img-box
        float left
        padding .07rem
        img
          border-radius 50%
      .my-info
        flex 1
        padding .1rem .3rem
        .my-tel
          font-weight 500
          padding .27rem 0
          font-size 15px
          line-height .53rem
          color #151313f0
        .my-detail
          color #504848ad
          line-height .4rem
    .my-intro
      display flex
      padding .1rem 0
      .intro-item
        flex 1
        display flex
        flex-direction column
        text-align center
        .item
          padding .28rem
        .desc
          color #666
  .my-content
    margin-top .28rem
    padding: 0.35rem 0.2rem
    background-color #ffffff
    .content-item
      display flex
      padding .36rem .2rem
      border-bottom 1px solid #f8f8f8
      .item-img
        float left
        i
          font-size .53rem
      p
        flex 1
        line-height .4rem
        margin  0 .13rem
        font-size 14px
        padding-left .1rem
</style>
