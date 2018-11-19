<template>
  <div class="login-wrap">
    <div class="m-header">
      <router-link to="/login" tag="div" class="quxiao" >
        <span class="iconfont icon-tubiaozhizuomoban-"></span>
      </router-link>
      <h2>注册</h2>
    </div>
    <div class="m-form">
      <form @submit.prevent="onSubmit">
        <div class="form-item">
          <input type="text" placeholder="请输入手机号或用户名" autocomplete="on" v-model="registerForm.username" name="username"  />
        </div>
        <div class="form-item">
          <input type="password" placeholder="请设置6-20位字母数字密码" autocomplete="on" v-model="registerForm.password" name="password" />
        </div>
        <div class="form-item">
          <input type="password" placeholder="再一次确认密码" autocomplete="on" v-model="registerForm.repassword" name="password" />
        </div>
        <div class="form-item">
          <button class="toRegister" @click="submitRegister()">注册</button>
        </div>
        <div class="form-item">
          <div class="other-box">
            <p>推荐使用中国大陆手机号注册或第三方登录</p>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data () {
    return {
      registerForm: {
        username: '',
        password: '',
        repassword: ''
      }
    }
  },
  methods: {
    onSubmit () {
      return false
    },
    submitRegister () {
      console.log('我要注册信息啦')
      let username = this.registerForm.username
      let password = this.registerForm.password
      let repassword = this.registerForm.repassword
      if (username !== '' && password !== '' && repassword !== '' && password === repassword) {
        // http://localhost:3000/api/login
        axios.post(`http://localhost:3000/api/login`, {
          username: username,
          password: repassword
        }).then(res => {
          if (res.data.code === 200) {
            console.log('注册新用户成功')
            alert(res.data.msg)
            this.$router.push({path: '/login'})
          }
        }).catch(e => {
          console.log(`注册出错了,请稍后尝试...${e}`)
        })
      } else {
        alert('请完善信息或两次密码不一致')
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
      padding-top .1rem
  .m-form
    width 100%
    box-sizing border-box
    padding .27rem .13rem
    form
      padding .27rem
      margin-top 0.8rem
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
        .toRegister
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
          p
            color #676262
            padding-left .31rem
</style>
