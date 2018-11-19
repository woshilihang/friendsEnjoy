const db = require('../db')

const Sequelize = db.sequelize

const UserOperNum = Sequelize.import('../schema/userOperNum')

UserOperNum.sync({force: false})

class UserModel {
  // static async create
}

module.exports = UserModel
