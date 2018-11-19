const ArticleModel = require('../modules/article')

class ArticleController {
  // 创建文章
  static async create (ctx) {
    // 接收客户端
    let req = ctx.request.body
    let postData = Object.assign({}, req)
    const data = await ArticleModel.createArticle(postData)
    ctx.status = 200
    ctx.body = {
      code: 200,
      msg: '创建新文章成功',
      data
    }
  }

  // 查询某一条文章相关信息
  static async detailOne (ctx) {
    let articleId = ctx.params.articleId
    if (articleId) {
      try {
        // 查询用户详情
        let data = await ArticleModel.getArticleOne(articleId)
        ctx.status = 200
        ctx.body = {
          code: 200,
          data,
          msg: '查询成功'
        }
      } catch (e) {
        ctx.status = 412
        ctx.body = {
          code: 412,
          msg: '查询失败'
        }
      }
    } else {
      ctx.status = 416
      ctx.body = {
        code: 416,
        mag: '参数不齐全'
      }
    }
  }

  // 查询所有文章信息
  static async detailAll (ctx) {
    try {
      // 查询用户详情
      let data = await ArticleModel.getArticleAll()
      ctx.status = 200
      ctx.body = {
        code: 200,
        data,
        msg: '查询成功'
      }
    } catch (e) {
      ctx.status = 412
      ctx.body = {
        code: 412,
        msg: '查询失败'
      }
    }
  }

  // 查询一类文章
  static async detailClassify (ctx) {
    let tag = ctx.params.tag
    if (tag) {
      try {
        // 查询用户详情
        let data = await ArticleModel.getArticleClassify(tag)
        ctx.status = 200
        ctx.body = {
          code: 200,
          data,
          msg: '查询成功'
        }
      } catch (e) {
        ctx.status = 412
        ctx.body = {
          code: 412,
          msg: '查询失败'
        }
      }
    } else {
      ctx.status = 416
      ctx.body = {
        code: 416,
        mag: '类型不存在'
      }
    }
  }

  static async randomArticle (ctx) {
    // return await ArticleModel.randomArticle()
    let data = await ArticleModel.randomArticle()
    ctx.status = 200
    ctx.body = {
      code: 200,
      data,
      msg: '查询成功'
    }
  }
}
module.exports = ArticleController
