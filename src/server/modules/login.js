/* eslint-disable no-return-await */
const db = require('../db')
// 引入Sequelize对象 数据库连接池
const Sequelize = db.sequelize
// 引入上一步创建的登录数据模型文件
const Login = Sequelize.import('../schema/login')
// 自动创建表
Login.sync({
  force: false
})

class LoginModel {
  /**
   * 创建用户模型
   * @param data
   * @return {Promise<*>}
   * */
  static async createLogin (data) {
    console.log(data)
    return await Login.create({
      username: data.username, // 用户名
      password: data.password // 用户密码
    })
  }
  /**
   * 查询取用户信息
   * @param username 用户名
   * @returns {Promise<Model>}
   */
  static async getLoginDetail (username) {
    return await Login.findOne({
      where: {
        username
      }
    })
  }
  // static async verifyMsg (username, password) {
  //   // return await Login.
  // }
}

module.exports = LoginModel
// 创建一个新的用户实例
