<template>
  <div>
    <index-header :articleList="articleList"></index-header>
    <index-content :articleList="articleList"></index-content>
    <tab-bar-bottom></tab-bar-bottom>
  </div>
</template>

<script>
import TabBarBottom from '@/base/tabBarBottom/tabBarBottom'
import IndexHeader from './components/indexHeader/indexHeader'
import IndexContent from './components/indexContent/indexContent'
export default {
  name: 'Index',
  data () {
    return {
      articleList: {
        articleId: '2',
        avatar: '/static/img/avatar.a6bd8d6.jpg',
        username: '毛姆《人性的枷锁》',
        time: '3分钟前',
        createTime: '2018-10-19',
        content: '所谓“青春多幸福”的说法，不过是一种幻觉，是青春已逝的人们的一种幻觉。',
        contentImg: 'http://image.wufazhuce.com/Fr3a7YtDhon3J6ERJIJ9GP04xli0',
        loveNum: 4,
        commentNum: 2,
        isCollection: false,
        tags: ['情感'],
        comment: [
          {
            id: 1,
            username: '北喧',
            commentTime: '2分钟前',
            commentWords: '那个白衣少年，本来就不属于我...',
            isLiked: false
          }
        ]
      }
    }
  },
  components: {
    TabBarBottom,
    IndexHeader,
    IndexContent
  }
}
</script>

<style lang="stylus" scoped>

</style>
