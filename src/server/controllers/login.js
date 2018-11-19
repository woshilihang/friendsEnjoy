const LoginModel = require('../modules/login')
class LoginController {
  // 创建用户
  static async create (ctx) {
    // 接收客户端
    let req = ctx.request.body
    if (req.username && req.password) {
      try {
        // 创建用户模型
        const ret = await LoginModel.createLogin(req)
        // 把刚刚创建的文章用户名查询用户详情，且返回新创建的用户信息
        const data = await LoginModel.getLoginDetail(ret.username)
        ctx.status = 200
        ctx.body = {
          code: 200,
          msg: '创建新用户成功',
          data
        }
      } catch (e) {
        console.log('参数不全，请重新填写或用户名已存在')
        ctx.response.status = 416
        ctx.body = {
          code: 200,
          msg: '参数不全，请重新填写或用户名已存在'
        }
      }
    }
  }
  static async detail (ctx) {
    let username = ctx.params.username
    if (username) {
      try {
        // 查询用户详情
        let data = await LoginModel.getLoginDetail(username)
        ctx.status = 200
        ctx.body = {
          code: 200,
          data,
          msg: '查询成功'
        }
      } catch (e) {
        ctx.status = 412
        ctx.body = {
          code: 412,
          msg: '查询失败'
        }
      }
    } else {
      ctx.status = 416
      ctx.body = {
        code: 416,
        mag: '参数不齐全'
      }
    }
  }
  static async verifyMsg (ctx) { // 验证函数
    // 接收客户端登录信息
    let req = ctx.request.body
    console.log(req)
    if (req.username && req.password) {
      const ret = await LoginModel.getLoginDetail(req.username) // 拿到改用户名的信息
      if (ret && ret.password === req.password) {
        // 用户存在且密码相同
        ctx.status = 200
        // ctx.session.username = 'li'
        ctx.body = {
          code: 200,
          msg: '登录成功'
        }
      }
    }
  }
}

module.exports = LoginController
