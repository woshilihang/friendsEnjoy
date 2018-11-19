const CommentModel = require('../modules/comment')
const ArticleModel = require('../modules/article')
const axios = require('axios')

class CommentController {
  static async getCommentData (ctx) {
    ctx.status = 200
    ctx.body = {
      msg: '获取评论数据信息'
    }
  }

  // 创建评论
  static async create (ctx) {
    // 接收客户端输入信息
    let req = ctx.request.body
    const newComment = await CommentModel.createComment(req)
    // console.log(newComment)
    // 新建一条评论之后需要对该文章中的评论进行插入
    // toArticleId为要对其文章进行评论的ID
    // 拿到comment评论值，进行连接新插入的值
    // let insertCommend = await ArticleModel.getArticleOne(req.toArticleId)
    let insertCommend = await axios.get(`http://localhost:3000/api/community/getArticleOne/${req.toArticleId}`)
    console.log(insertCommend.data.data)
    let thisComment = JSON.parse(insertCommend.data.data.comment) // 数组对象
    thisComment.push(newComment)
    // 调用articleModel内的updateComment函数进行数据更新
    ArticleModel.updateComment(req.toArticleId, JSON.stringify(thisComment))
    // console.log(thisComment)
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '创建评论成功',
      newComment
    }
  }

  static async detail (ctx) {
    let articleId = ctx.params.articleId
    if (articleId) {
      try {
        let data = await CommentModel.getComment(articleId)
        ctx.status = 200
        ctx.body = {
          code: 200,
          data,
          msg: '查询评论成功'
        }
      } catch (e) {
        ctx.status = 412
        ctx.body = {
          code: '查询失败'
        }
      }
    }
  }
}
module.exports = CommentController
