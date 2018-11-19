const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())
const cors = require('koa-cors')
app.use(cors())
const session = require('koa-session')
app.use(session({
  key: 'koa:sess', /** 默认 */
  maxAge: 10000, /*  cookie的过期时间        【需要修改】  */
  overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
  httpOnly: true, /**  true表示只有服务器端可以获取cookie */
  signed: true, /** 默认 签名 */
  rolling: true, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
  renew: false /** (boolean) renew session when session is nearly expired      【需要修改】 */
}, app))
// const Router = require('koa-router')
// const router = new Router()

// router.get('/login', async ctx => {
//   ctx.body = 'hello world index.page'
// })

// app.use(router.routes(), router.allowedMethods())
const createUser = require('./routes/login')
// app.use(async ctx => {
//   ctx.body = 'hello worlda'
// })
app.use(createUser.routes(), createUser.allowedMethods)

app.listen(3000, () => {
  console.log('server at running 3000....')
})
