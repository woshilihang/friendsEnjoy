/* eslint-disable no-return-await */
const db = require('../db')
// 引入Sequelize对象 数据库连接池
const Sequelize = db.sequelize
// 引入上一步创建的文章数据模型文件
const Article = Sequelize.import('../schema/article')
// 自动创建表
Article.sync({
  force: false
})
// 引入Comment控制层获取评论
// const CommentColler = require('../controllers/comment')
const axios = require('axios')

class ArticleModel {
  /**
   * 创建文章模型
   * @param data
   * @return {Promise<*>}
   * */
  static async createArticle (data) {
    // console.log(data)
    // 查询comment表来获取到某个评论的数据， 然后转化为字符串推入到Article类型当中
    // const comment = await CommentColler.detail(data.articleId)
    // 拿到改articleId的相关评论
    const results = await axios.get(`http://localhost:3000/api/comment/getCommen/${data.articleId}`)
    let com = results.data.data
    let tempObj = Object.assign({}, com) // 返回一个数组包含对象形式
    let arr = []
    arr.push(tempObj)
    let StringArr = JSON.stringify(arr)
    return await Article.create({
      articleId: data.articleId, // 必须
      username: data.username, // 必须
      userId: data.userId,
      avatar: data.avatar,
      content: data.content,
      contentImg: data.contentImg,
      loveNum: data.loveNum,
      commentNum: data.commentNum,
      isCollection: data.isCollection || false,
      isPrivate: data.isPrivate || false,
      tag: data.tag,
      tagZN: data.tagZN || '默认',
      comment: StringArr
    })
  }
  /**
   * 查询文章信息 -------------------  具体某一个文章详情信息
   * @param articleId 文章ID
   * @returns {Promise<Model>}
   */
  static async getArticleOne (articleId) {
    return await Article.findOne({
      where: {
        articleId
      }
    })
  }

  // 查询所有文章
  static async getArticleAll () {
    return await Article.findAll()
  }

  // 查询相关类型信息 比如励志相关的文章信息， 情感相关的信息
  static async getArticleClassify (tag) {
    return await Article.findAll({
      where: {
        tag
      }
    })
  }

  static async updateComment (articleId, newValue) {
    Article.findById(articleId).then(article => {
      article.increment('commentNum')
    })
    return await Article.update({
      comment: newValue
      // commentNum: commentNum + 1
    }, {
      where: {
        articleId
      }
    })
  }

  // 按评论数最多的获取
  static async randomArticle () {
    return await Article.findAll({
      'order': [
        ['commentNum', 'DESC']
      ]
    })
  }
}

module.exports = ArticleModel
