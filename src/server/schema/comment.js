const moment = require('moment')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('comment', {
    toArticleId: { // 评论到某一篇文章
      type: DataTypes.INTEGER,
      allowNull: false
    },
    commentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    otherName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    otherAvatar: {
      type: DataTypes.STRING,
      allowNull: false
    },
    otherComment: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '踩一下。'
    },
    isLiked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
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
  },
  {
    // 如果为true，则表的名称和model相同，否则 mysql创建表的名称为复数
    freezeTableName: true
  })
}
