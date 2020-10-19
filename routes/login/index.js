const router = require('koa-router')()
const controller_login = require('../../controller/login/index')

router.post('/token', async (ctx, next) => {
  await controller_login.token(ctx,next).then(data=>{
    ctx.body=data
  })
})

router.get('/getCaptcha', async (ctx, next) => {
  await controller_login.getCaptcha(ctx,next).then((captcha)=>{
    ctx.set('Content-Type', 'image/svg+xml');
    ctx.body = captcha
  })
})

router.post('/loginIn', async (ctx, next) => {
  await controller_login.loginIn(ctx,next).then(data=>{
    ctx.body=data
  })
})

router.post('/register', async (ctx, next) => {
  await controller_login.register(ctx,next).then(data=>{
    ctx.body=data
  })
})

router.post('/validateQues', async (ctx, next) => {
  await controller_login.validateQues(ctx,next).then(data=>{
    ctx.body=data
  })
})

router.post('/resetPass', async (ctx, next) => {
  await controller_login.resetPass(ctx,next).then(data=>{
    ctx.body=data
  })
})

module.exports = router
