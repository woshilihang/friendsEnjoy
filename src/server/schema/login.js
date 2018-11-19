// const db = require('../db')

const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('login', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // 创建时间
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    // 更新时间
    updatedAt: {
      type: DataTypes.DATE,
      get () {
        return moment(this.getDataValue('updatedAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    }
  }, {
    // 如果为true，则表的名称和model相同，否则 mysql创建表的名称为复数
    freezeTableName: true
  })
}
