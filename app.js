const Koa = require('koa')
// const cors = require('koa2-cors');
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cookieParase = require('cookie-parser');
const session = require('koa-session');
const checkToken = require('./utils/checkToken.js')

app.keys = ["some secret hurr"];
const Config = {
  key: 'koa.sess', /** (string) cookie key (default is koa.sess) */
  maxAge: 60000,
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
};

const login = require('./routes/login/index')
const home = require('./routes/home/index')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
// app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// app.use(views(__dirname + '/views', {
//   extension: 'ejs'
// }))


// app.use(cors({
//   credentials: true,
// }))

// routes
app.use(checkToken)

app.use(async (ctx, next) => {
  // 允许来自所有域名请求
  console.log('app')
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

app.use(session(Config,app));


app.use(login.routes(), login.allowedMethods())
app.use(home.routes(), home.allowedMethods())

// app.use(checkToken)

// app.use(cookieParase());



// logger



// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
