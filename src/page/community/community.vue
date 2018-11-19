<template>
  <div class="m-community">
    <div class="m-header">
      <div class="m-search">
        <i class="iconfont icon-sousuo icon" v-show="searchVal.length === 0"></i>
        <input type="text" class="search" name="search" v-model="searchVal" placeholder="搜索喜欢内容"/>
      </div>
      <div class="m-home-nav">
        <ul class="home-nav-list">
          <router-link class="home-nav-item" v-for="(item, index) in nav" :key="index" :to="item.url">
            {{item.text}}
          </router-link>
        </ul>
        <div class="nav-more">
          <i class="iconfont icon-gengduo"></i>
        </div>
      </div>
    </div>
    <div class="m-content" ref="wrapper">
      <div>
        <div class="content-list" v-for="item in articleList" :key="item.articleId">
          <div class="content-item">
            <div class="item-title">
              <span class="item-avatar">
                <img alt="avatar头像" :src="item.avatar" width="38" height="38" />
              </span>
              <div class="item-info">
                <p class="item-username">{{item.username}}</p>
                <span class="time">{{item.createdAt}}</span>
              </div>
            </div>
            <router-link :to="{name:'Content',params:{articleId: item.articleId}}" tag="div">
              <div class="item-desc">
                {{item.content}}
              </div>
              <div class="item-img" v-show="item.contentImg !== ''">
                <img alt="说说图片" :src="item.contentImg" />
              </div>
              <div class="item-oper-box">
                <!-- 喜欢数量 -->
                <span class="oper-info">
                  <i class="iconfont icon-xiangqu"></i>
                  <span class="num">{{item.loveNum}}</span>
                </span>
                <!-- 评论 -->
                <span class="oper-info">
                  <i class="iconfont icon-pinglun"></i>
                  <span class="num">{{item.commentNum}}</span>
                </span>
                <span class="oper-info">
                  <!-- 收藏 -->
                  <span :class="{isColl: item.isCollection}">
                    <i class="iconfont icon-shuqianbiaozhubiaojizhengshurenzhengxianxing"></i>
                  </span>
                  <span class="num"></span>
                </span>
                <span class="oper-info">
                  <!-- 转发 -->
                  <i class="iconfont icon-fenxiang"></i>
                  <!-- <span class="num">0</span> -->
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <add-buttom></add-buttom>
    <tab-bar-bottom></tab-bar-bottom>
  </div>
</template>

<script>
import TabBarBottom from '@/base/tabBarBottom/tabBarBottom'
import AddButtom from '@/base/addButton/addButton'
import axios from 'axios'
import BScroll from 'better-scroll'
export default {
  name: 'Community',
  data () {
    return {
      searchVal: '',
      nav: [
        {url: '/community/recommend', text: '推荐'},
        {url: '/community/lost', text: '寻物'},
        {url: '/community/explain', text: '表白'},
        {url: '/community/program', text: '编程'},
        {url: '/community/subscribe', text: '订阅'},
        {url: '/community/Original', text: '原创'},
        {url: '/community/topic', text: '话题'},
        {url: '/community/emotion', text: '情感'},
        {url: '/community/mind', text: '心事'},
        {url: '/community/mind', text: '广场'},
        {url: '/community/struggle', text: '励志'},
        {url: '/community/soup', text: '毒汤'},
        {url: '/community/english', text: '英文'},
        {url: '/community/movie', text: '视频'}
      ],
      articleList: []
    }
  },
  components: {
    TabBarBottom,
    AddButtom
  },
  // created () {
  //   this.loadData()
  // },
  methods: {
    loadData (parUrl) { // 传入一个tag类型
      axios.get(parUrl).then(res => {
        if (res.data.code === 200) {
          let data = res.data.data
          this.articleList = data
          // this.articleList = data.concat(this.articleList)
          this.$nextTick(() => {
            if (!this.scroll) { // 如果没有初始化就会通过对它初始化并绑定事件，如果已经存在则刷新
              this.scroll = new BScroll(this.$refs.wrapper, {})
              this.scroll.on('touchend', (pos) => {
                if (pos.y > 5) {
                  this.loadData()
                  console.log(555)
                }
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
      })
    }
  },
  watch: {
    $route (to, from) { // 监听路由变化，传入变化路由参数
      if (to.name === 'Community') {
        if (to.params.tag === 'recommend') {
          this.loadData('http://localhost:3000/api/community/getRandomArticle')
        } else {
          this.loadData(`http://localhost:3000/api/community/getArticleClassify/${to.params.tag}`)
        }
        // this.loadData(to.params.tag)
      }
    }
  },
  mounted () {
    let tempTag = this.$route.params.tag
    if (tempTag === 'recommend') {
      this.loadData('http://localhost:3000/api/community/getRandomArticle')
    } else {
      this.loadData(`http://localhost:3000/api/community/getArticleClassify/${tempTag}`)
    }
  }
}
</script>

<style lang="stylus" scoped>
.m-community
  padding-top 2.44rem
  background-color #f3f3f3
  .m-header
    position fixed
    left 0
    right 0
    top 0
    padding .2rem .35rem
    background-color #ffffff
    .m-search
      position relative
      .icon
        position absolute
        left 50%
        margin-left -1.68rem
        top .19rem
        color #d7d7d7
      .search
        width 100%
        box-sizing border-box
        height .76rem
        line-height .76rem
        padding .1rem
        border none
        outline none
        border-radius .4rem
        background-color #f8f8f8
        text-align center
        letter-spacing .06rem
        &::-webkit-input-placeholder
          color #d8d8d8
    .m-home-nav
      width: 100%
      box-sizing border-box
      _height .86rem
      _background-color #eeeeee
      padding .2rem 0
      z-index 200
      position relative
      .home-nav-list
        display flex
        align-items middle
        overflow auto
        margin-right 1.2rem
        .home-nav-item
          height .86rem
          line-height .86rem
          text-align center
          flex-shrink 0
          flex-basis 1.2rem
          color #a5a7a9
          font-size 14px
        .router-link-active
          color #505155
      .nav-more
        position absolute
        right .36rem
        top .42rem
        i
          font-size 18px
  .m-content
    .content-list
      margin-bottom .28rem
      background-color #ffffff
      padding 0.2rem 0.4rem
      .content-item
        .item-title
          display flex
          .item-avatar
            float left
            img
              border-radius 50%
          .item-info
            flex 1
            margin-left .3rem
            .item-username
              line-height .48rem
              font-size 15px
              padding .08rem 0
            .time
              font-size 10px
              color #d8d8d8
        .item-img
          width 100%
          height 0
          padding-bottom 44.3%
          overflow hidden
          img
            width 100%
        .item-desc
          line-height .58rem
          padding .1rem 0
          font-size 13px
          text-indent .28rem
          color #363636
        .item-oper-box
          display flex
          height 1rem
          flex-direction row
          align-items center
          text-align center
          color #98979a
          margin-top .27rem
          border-top 1px solid #f8f8f8
          .oper-info
            display block
            flex 1
            .isColl
              color: #3f51b5
              .num
                color #aaaaaa
</style>
