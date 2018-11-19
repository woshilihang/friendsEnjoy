<template>
  <div class="m-detail">
    <div class="m-header">
      <div class="quxiao" @click="handleBack()">
        <span class="iconfont icon-tubiaozhizuomoban-"></span>
      </div>
      <h2>详情</h2>
    </div>
    <div class="m-content">
      <div class="content-list">
        <div class="content-item">
          <div class="item-title">
            <span class="item-avatar">
              <img alt="avatar头像" :src="articleData.avatar" width="38" height="38" />
            </span>
            <div class="item-info">
              <p class="item-username">{{articleData.username}}</p>
              <span class="time">{{articleData.time}}</span>
            </div>
          </div>
            <div class="item-desc">
              {{articleData.content}}
            </div>
            <div class="item-img">
              <img alt="说说图片" :src="articleData.contentImg" />
            </div>
            <div class="item-oper-box">
              <span class="oper-info">
                <i class="iconfont icon-xiangqu"></i>
                <span class="num">{{articleData.loveNum}}</span>
              </span>
              <span class="oper-info">
                <i class="iconfont icon-pinglun"></i>
                <span class="num">{{articleData.commentNum}}</span>
              </span>
              <span class="oper-info">
                <!-- 收藏 -->
                <span :class="{isColl: articleData.isCollection}">
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
        </div>
      </div>
    </div>
    <div class="m-tag">
      <span>{{articleData.tagZN}}</span>
    </div>
    <div class="m-comment">
      <p class="latestCommon">最新评论</p>
      <div class="comment-user-list">
        <div class="comment-user-item" v-for="item in commentList" :key="item.commentId">
          <div class="other-avatar">
            <img alt="avatar头像" :src="item.otherAvatar" width="38" height="38" />
          </div>
          <div class="other-info">
            <div class="other-title">
              <div class="other-title-l">
                <p class="other-username">{{item.otherName}}</p>
                <span class="time">{{item.createdAt}}</span>
              </div>
              <div class="other-title-r">
                <i class="iconfont icon-tuijian1"></i>
              </div>
              <div style="clear:both"></div>
            </div>
            <p class="other-comment">{{item.otherComment}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Content', // 详情页
  data () {
    return {
      articleData: {
        // articleId: '1',
        // avatar: 'http://image.wufazhuce.com/Fr3a7YtDhon3J6ERJIJ9GP04xli0',
        // username: '姬霄',
        // time: '1分钟前',
        // content: '喜欢是自我舒适，爱却是在舒适中找困难，获取一种碾碎、压榨、提纯的快感，我们都将偏执度过。',
        // contentImg: 'http://image.wufazhuce.com/FkZlLq3qeSDfThc1hGmi8aWU9WXd',
        // loveNum: 4,
        // commentNum: 0,
        // isCollection: true,
        // tags: ['励志'],
        // comment: []
      },
      commentList: []
    }
  },
  methods: {
    handleBack () {
      this.$router.go(-1) // 返回上一页
    },
    getArticleOneData (articleId) {
      axios.get(`http://localhost:3000/api/community/getArticleOne/${articleId}`).then(res => {
        if (res.data.code === 200) {
          this.articleData = res.data.data
        }
      })
    },
    getCommentData (articleId) {
      axios.get(`http://localhost:3000/api/comment/getComment/${articleId}`).then(res => {
        if (res.data.code === 200) {
          this.commentList = res.data.data
          console.log(this.commentList)
        }
      })
    }
  },
  mounted () {
    let articleId = this.$route.params.articleId
    this.getArticleOneData(articleId)
    this.getCommentData(articleId)
  }
}
</script>

<style lang="stylus" scoped>
.m-detail
  width 100%
  background #f3f3f3
  .m-header
    height .84rem
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
    h2
      flex 1
      height .84rem
      line-height .84rem
      font-size .43rem
      margin-left -.85rem
      padding-top .05rem
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
  .m-tag
    margin-top .28rem
    background-color #ffffff
    padding .38rem .36rem
    span
      display inline-block
      padding .18rem .38rem
      color rgb(150, 151, 153)
      border 1px solid rgb(168, 168, 168)
      border-radius .4rem
  .m-comment
    background #ffffff
    margin-top .28rem
    p.latestCommon
      line-height 1rem
      font-size 14px
      color rgb(64, 64, 64)
      border-bottom .04rem solid rgb(248, 248, 248)
      padding-left .36rem
    .comment-user-list
      padding .4rem
      .comment-user-item
        display flex
        border-bottom .04rem solid rgb(248, 248, 248)
        .other-avatar
          float left
          img
            border-radius 50%
        .other-info
          flex 1
          margin-left 0.3rem
          .other-title-l
            float left
            .other-username
              line-height 0.48rem
              font-size 15px
              padding 0.08rem 0
            .time
              font-size 10px
              color #d8d8d8
          .other-title-r
            float right
            color rgb(206, 210, 211)
          .other-comment
            line-height .48rem
            padding .25rem 0
            color rgb(74, 79, 82)
</style>
