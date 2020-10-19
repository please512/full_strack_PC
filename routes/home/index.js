const router = require('koa-router')()
const controller_home = require('../../controller/home/index')

router.post('/send', async (ctx, next) => {
    console.log('路由')
    await controller_home.send(ctx, next).then(data => {
        ctx.body = data
    })
})

module.exports = router