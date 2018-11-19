<template>
  <div class="login-wrap">
    <div class="m-header">
      <div class="quxiao">
        <span class="iconfont icon-quxiao1"></span>
      </div>
      <h2>登录</h2>
    </div>
    <div class="m-logo">
      <img src="./logo.png" alt="logo图片" />
    </div>
    <div class="m-form">
      <form @submit.prevent="onSubmit">
        <div class="form-item">
          <input type="text" placeholder="用户名或手机号码" autocomplete="on" v-model="loginForm.username" name="username"  />
        </div>
        <div class="form-item">
          <input type="password" placeholder="登录密码" autocomplete="on" v-model="loginForm.password" name="password" />
        </div>
        <div class="form-item">
          <button class="toLogin" @click="submitForm()">登录</button>
        </div>
        <div class="form-item">
          <div class="other-box">
            <!-- <span class="toRegister">快速注册</span> -->
            <router-link to="/register" tag="span" class="toRegister">
              快速注册
            </router-link>
            <!-- <span class="forgetPwd">忘记密码</span> -->
            <router-link to="forgetPwd" tag="span" class="forgetPwd">
              忘记密码
            </router-link>
          </div>
        </div>
      </form>
    </div>
    <div class="m-info">
      <p>更多登录方式</p>
      <div class="m-other-login">
        <span class="m-wx">
          <i class="iconfont icon-weixin"></i>
          <span>微信</span>
        </span>
        <span class="m-qq">
          <i class="iconfont icon-05"></i>
          QQ
        </span>
        <span class="m-weibo">
          <i class="iconfont icon-fenxiangxinlangweibo"></i>
          微博
        </span>
      </div>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit () {
      return false
    },
    submitForm () {
      let username = this.loginForm.username
      let password = this.loginForm.password
      if (username !== '' && password !== '') {
        // http://localhost:3000/api/login
        axios.post(`http://localhost:3000/api/verifyMsg`, {
          username: username,
          password: password
        }).then(res => {
          console.log(res)
          if (res.data.code === 200) {
            console.log('登录成功')
            // 编程式路由
            this.$router.push({path: '/my'})
          } else {
            alert('用户不存在，请重新输入')
          }
        }).catch(e => {
          console.log(`登录出错了,请稍后尝试...${e}`)
        })
      } else {
        alert('请输入正确信息格式')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.login-wrap
  width 100%
  height 100%
  overflow hidden
  .m-header
    height .84rem
    line-height .84rem
    display flex
    text-align center
    .quxiao
      float left
      display inline
      .icon-quxiao1
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
  .m-logo
    text-align center
    width 100%
    height 2.67rem
    overflow hidden
    vertical-align middle
    padding .34rem 0
    margin-top .5rem
    img
      height 100%
  .m-form
    width 100%
    box-sizing border-box
    padding .27rem .13rem
    form
      padding .27rem
      .form-item
        width 100%
        box-sizing border-box
        padding .2rem 0
        input
          width 100%
          height .64rem
          padding 10px 0
          outline none
          padding-left .27rem
          // border none
        .toLogin
          border none
          outline none
          line-height .88rem
          display block
          width 90%
          margin auto
          text-align center
          background #464a4a
          color #ffffff
          border-radius 4px
        .other-box
          margin-top .15rem
          .toRegister
            float left
            margin-left .23rem
         .forgetPwd
            float right
            margin-right .23rem
  .m-info
    position absolute
    bottom 0
    left 0
    right 0
    display flex
    width 100%
    box-sizing border-box
    width 100%;
    height 4rem
    flex-direction column
    p
      line-height .27rem
      color #666666
      padding .4rem
      text-align center
      line-height .43rem
    .m-other-login
      display flex
      margin-top .3rem
      height 2.4rem
      padding 0 .67rem
      text-align center
      .m-wx
        flex 1
        display flex
        flex-direction column
        .icon-weixin
          font-size .83rem
          color #0bc84e
      .m-qq
        flex 1
        display flex
        flex-direction column
        .icon-05
          font-size .83rem
          color #03A9F4
      .m-weibo
        flex 1
        display flex
        flex-direction column
        .icon-fenxiangxinlangweibo
          font-size .83rem
          color #e5908d
</style>
