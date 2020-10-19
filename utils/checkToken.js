// 单独的创建一个中间件，然后在app.js中注册使用
const jwt = require('jsonwebtoken')
async function check(ctx, next) {
    let url = ctx.request.url
    // 如果是登陆页面和注册页面就不需要验证token了
    if (url == '/loginIn' || url == '/register' || url == '/forgetpass' || /getCaptcha/.test(url)) {
        await next()
    } else {
        // 否则获取到token
        let token = ctx.request.headers["authorization"]
        console.log('请求头携带的token')
        console.log(token)
        if (token) {
            // 如果有token的话就开始解析
            const tokenItem = jwt.verify(token, 'token')
            console.log('请求头携带的token详情')
            console.log(tokenItem)
            // 将token的创建的时间和过期时间结构出来
            const { time, timeout } = tokenItem
            // 拿到当前的时间
            let data = new Date().getTime();
            console.log('token生成时间')
            console.log(new Date(time))
            console.log('token失效时间')
            console.log(new Date(timeout))
            console.log('当前时间')
            console.log(new Date(data))
            // 判断一下如果当前时间减去token创建时间小于或者等于token过期时间，说明还没有过期，否则过期
            if (Number(data) <= Number(timeout)) {
                // token没有过期
                console.log('不过期')
                await next()
            } else {
                ctx.body = {
                    status: 440,
                    msg:'token 已过期，请重新登陆'
                }  
            }
        }
    }
}



module.exports = check