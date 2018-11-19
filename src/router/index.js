import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/login/login'
import Register from 'page/register/register'
import My from 'page/my/my'
import ForgetPwd from 'page/forgetPwd/forgetPwd'
import TabBarBottom from '@/base/tabBarBottom/tabBarBottom'
import Community from '@/page/community/community'
import IndexPage from '@/page/index/index'
import Content from '@/base/content/content'
import AddArticle from '@/page/addArticle/addArticle'
// import CommunityEmotion from '@/page/subRoute/emotion/emotion'
// import CommunityExplain from '@/page/subRoute/explain/explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/community/recommend'
    },
    {
      path: '/community',
      redirect: '/community/recommend'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/forgetPwd',
      name: 'ForgetPwd',
      component: ForgetPwd
    },
    {
      path: '/tabBarBottom',
      name: 'TabBarBottom',
      component: TabBarBottom
    },
    {
      path: '/community/:tag',
      name: 'Community',
      component: Community
      // children: [
      //   {
      //     path: '/recommend',
      //     name: 'Recommend'
      //   },
      //   {
      //     path: 'emotion',
      //     name: 'Emotion',
      //     component: CommunityEmotion
      //   },
      //   {
      //     path: 'explain',
      //     name: 'Explain',
      //     component: CommunityExplain
      //   }
      // ]
    },
    {
      path: '/index',
      name: 'IndexPage',
      component: IndexPage
    },
    {
      path: '/content/:articleId',
      name: 'Content',
      component: Content
    },
    {
      path: '/addArticle',
      redirect: '/addArticle/share'
    },
    {
      path: '/addArticle/:type',
      name: 'AddArticle',
      component: AddArticle
    }
  ]
})
