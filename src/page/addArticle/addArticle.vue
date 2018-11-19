<template>
  <div class="add-article">
    <div class="m-header">
      <div class="quxiao" @click="handleBack()">
        <span class="iconfont icon-tubiaozhizuomoban-"></span>
      </div>
      <div class="header-r">
        <div class="tab-list">
          <router-link to="/addArticle/share" tag="div" class="tab-item">享吧</router-link>
          <router-link to="/addArticle/incognito" tag="div" class="tab-item">匿吧</router-link>
          <div class="tab-item tab-postMsg">
            <i class="iconfont icon-fasong"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="m-content">
      <textarea placeholder="写下你想要分享的故事..."></textarea>
      <div class="select-tag">
        <span>选择标签<i class="iconfont icon-xiangyou----copy"></i></span>
      </div>
      <div class="add-func">
        <div class="add-image">
          上传图片
        </div>
        <div class="add-getFont">
          <i class="iconfont icon-wenzishibie"></i>
        </div>
      </div>
    </div>
    <div class="desc">
      <i class="iconfont icon-bulb"></i>
      <span class="desc-info">
        此功能可以用来分享你认为好的一些信息
      </span>
    </div>
    <div class="box-list">
      <div class="box-item">
        <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntouxianxing"></i>
        <span>添加作者</span>
      </div>
      <div class="box-item">
        <i class="iconfont icon-zhinan"></i>
        <span>添加出处</span>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'AddArticle', // 文章添加页面
  data () {
    return {
    }
  },
  methods: {
    handleBack () {
      const tag = 'recommend'
      this.$router.push({name: 'Community', params: {tag}})
    }
  },
  mounted () {
  }
}
</script>

<style lang="stylus" scoped>
.add-article
  width 100%
  background #f3f3f3
  .m-header
    line-height .84rem
    display flex
    text-align center
    background #ffffff
    .quxiao
      float left
      display inline
      .icon-tubiaozhizuomoban-
        display inline-block
        width .64rem
        height .64rem
        vertical-align middle
        font-size .53rem
        padding  0 .11rem
    .header-r
      flex 1
      box-sizing border-box
      line-height .84rem
      font-size .43rem
      .tab-list
        box-sizing border-box
        padding .1rem 0
        .tab-item
          display inline-block
          padding 0 .2rem
        .router-link-active
          color rgb(181, 144, 91)
          border-bottom 1px solid rgb(181, 144, 91)
        .tab-postMsg
          float right
          width 1rem
          height 1rem
          padding-right .25rem
          padding-top .07rem
          i
            font-size 18px
  .m-content
    width 100%
    box-sizing border-box
    padding .58rem .4rem .2rem
    background #ffffff
    textarea
      width 100%
      box-sizing border-box
      outline none
      border none
      min-height 3.33rem
      &::-webkit-input-placeholder
        color rgb(205, 205, 207)
    .select-tag
      width 100%
      line-height .8rem
      color rgb(181, 144, 91)
      span
        border-radius .08rem
        padding .07rem .22rem
        border 1px solid rgb(181, 144, 91)
        border-radius .34rem
        i
          padding-left .07rem
          font-size 13px
    .add-func
      padding .3rem 0
      height 1.8rem
      line-height 1.8rem
      text-align center
      color rgb(206, 206, 206)
      .add-image
        float left
        width 1.8rem
        height 1.8rem
        border 1px solid rgb(205, 206, 206)
      .add-getFont
        float right
        padding-top .32rem
        i
          font-size 1.4rem
  .box-list
    width 100%
    box-sizing border-box
    padding .2rem .4rem
    background #ffffff
    .box-item
      line-height 1.07rem
      border-bottom 1px solid #f8f8f8
      span
        padding-left .15rem
        font-size .36rem
  .desc
    padding .23rem .4rem
    background #f3f3f3
    color rgb(205, 205, 207)
</style>
