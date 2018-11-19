// const db = require('../db')

const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('article', {
    articleId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    avatar: { // 用户头像
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=415293130,2419074865&fm=27&gp=0.jpg'
    },
    content: { // 发表文章时的内容, 不允许为空
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '今日打卡...'
    },
    contentImg: { // 发表文章时的图片
      type: DataTypes.STRING,
      allowNull: true
    },
    loveNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    commentNum: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    isCollection: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isPrivate: { // 是原创则可以设置隐私性
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tag: { // 所属tag类型
      type: DataTypes.STRING,
      allowNull: true
    },
    tagZN: { // 所属类型文字
      type: DataTypes.STRING,
      allowNull: true
    },
    // 创建时间
    createdAt: {
      type: DataTypes.DATE,
      get () {
        return moment(this.getDataValue('createdAt')).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    comment: { // 存储数组
      type: DataTypes.STRING,
      allowNull: true
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
