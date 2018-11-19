const Router = require('koa-router')
const LoginController = require('../controllers/login')
const ArticleController = require('../controllers/article')
const CommentController = require('../controllers/comment')

const router = new Router({
  prefix: '/api'
})
// 创建新用户的创建的接口
router.post('/login', LoginController.create)
// 创建获取用户信息的接口
router.get('/getUserMesage/:username', LoginController.detail)

router.post('/verifyMsg', LoginController.verifyMsg)

// 文章查询相关
// router.get('/community/article', ArticleController.getArticleData) // 测试接口

// 创建文章
router.post('/community/createArticle', ArticleController.create)
// 获取某一条具体的文章信息
router.get('/community/getArticleOne/:articleId', ArticleController.detailOne)
// 获取某一类信息 参数传入tag类型
router.get('/community/getArticleClassify/:tag', ArticleController.detailClassify)
// 获取到所有文章信息
router.get('/community/getArticleAll', ArticleController.detailAll)
// 推荐部分采用随机获取
router.get('/community/getRandomArticle', ArticleController.randomArticle)

// 评论相关
// 发布评论
router.post('/comment/createComment', CommentController.create)
// 获取到相关文章的所有评论
router.get('/comment/getComment/:articleId', CommentController.detail)
module.exports = router
