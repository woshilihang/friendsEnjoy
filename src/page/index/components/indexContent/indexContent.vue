<template>
  <div class="index-content">
    <div class="img-wrap">
      <!-- 62.2% -->
      <img :src="articleList.contentImg" alt="article image" height="200" />
    </div>
    <p class="time">{{formatString(articleList.createTime)}}  {{getDayOfWeek(articleList.createTime)}}</p>
    <div class="content-info">
      <p class="desc">{{articleList.content}}</p>
      <p class="author">
        <span>{{articleList.username}}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexContent',
  data () {
    return {}
  },
  props: {
    articleList: Object
  },
  methods: {
    getDayOfWeek (date) { // '2018-10-19' => 2018/10/19
      let day = new Date(Date.parse(date.replace(/-/g, '/'))) // 将日期格式化
      let today = ['星期天', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
      return today[day.getDay()]
    },
    formatString (str) { // 2018-10-19
      let tempStr = str.substring(0, str.lastIndexOf('-')) // 拿到2018-10
      return tempStr.split('-').join('.')
    }
  }
}
</script>

<style lang="stylus" scoped>
.index-content
  width 100%
  box-sizing border-box
  padding .1rem
  .img-wrap
    width 100%
    height 0
    overflow hidden
    padding-bottom 53.3%
    img
      width 100%
  .time
    line-height .6rem
    text-align right
    padding-right .32rem
    padding-top .11rem
    color rgb(64, 64, 64)
  .content-info
    padding 2.5rem .8rem
    p.desc
      line-height .64rem
      font-size .35rem
    p.author
      padding-top .2rem
      line-height .64rem
      font-size .38rem
      text-align right
</style>
