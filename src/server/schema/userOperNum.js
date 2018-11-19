const moment = require('moment')

module.exports = (sequelize, DataTypes) => { // 关于该用户所订阅信息的表
  return sequelize.define('userOperNum', {
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
    subscribe: { // 订阅数量
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 0
    },
    words: { // 句子数量
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 0
    },
    love: { // 喜爱数量
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 0
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
