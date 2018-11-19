/* eslint-disable no-return-await */
const db = require('../db')
// 引入Sequelize对象 数据库连接池
const Sequelize = db.sequelize
// 引入上一步创建的评论数据模型文件
const Comment = Sequelize.import('../schema/comment')
// 自动创建表
Comment.sync({
  force: false
})
class CommentmModel {
  static async getComment (articleId) { // 拿到相关的评论
    return await Comment.findAll({
      where: {
        toArticleId: articleId
      }
    })
  }
  static async createComment (data) {
    return await Comment.create({
      toArticleId: data.toArticleId,
      otherName: data.otherName,
      otherAvatar: data.otherAvatar,
      otherComment: data.otherComment,
      isLiked: data.isLiked
    })
  }
}

module.exports = CommentmModel
