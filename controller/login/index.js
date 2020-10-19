const sql = require('../../mysql/sql')
const md5 = require('../../utils/md5')
const svgCaptcha = require('svg-captcha');
const jwt = require('jsonwebtoken')

function loginIn(ctx, next) {
    let captcha = ctx.session.captcha
    // let usersession=ctx.session.users
    // console.log(usersession)
    return new Promise((resolve, reject) => {
        // let userList = []
        let body = ctx.request.body
        sql.query(`SELECT * FROM users WHERE username = '${body.username}'`, null).then(res => {
            userList = res
            if (userList.length) {
                let user = userList[0]
                if (user.password == body.password) {
                    if (captcha == body.captcha) {
                        console.log(body)
                        var token = jwt.sign({
                            //token的创建日期
                            time: Date.now(),
                            //token的过期时间
                            timeout: Date.now() + 60000,
                            username: body.username,
                            id: 1
                        // token：解析token的标识
                        }, 'token')
                        ctx.cookies.set('accesstoken', token)
                        resolve({
                            msg: '登录成功！',
                            state: '200',
                            data: token
                        })
                    } else {
                        resolve({
                            msg: '验证码错误！',
                            state: '0',
                            data: null
                        })
                    }
                } else {
                    resolve({
                        msg: '密码错误！',
                        state: '0',
                        data: null
                    })
                }
            } else {
                resolve({
                    msg: '该手机号未注册！',
                    state: '0',
                    data: null
                })
            }
        })
    })
}

function register(ctx, next) {
    return new Promise((resolve, reject) => {
        sql.query(`SELECT * FROM users WHERE username = '${ctx.request.body.username}'`, null).then(res => {
            console.log(res)
            if (res.length) {
                resolve({
                    msg: '该手机号已被注册！',
                    state: '0',
                    data: null
                })
            } else {
                let body = ctx.request.body
                sql.query(`insert INTO users (username,password,createtime,fathername,mothername,othername) values('${body.username}','${body.password}','${body.createtime}','${body.fathername}','${body.mothername}','${body.othername}')`, ctx.request.body).then((res) => {
                    console.log(res)
                    resolve({
                        msg: '注册成功',
                        state: '200',
                        data: null
                    })
                })
            }
        })
    })
}

function getCaptcha(ctx, next) {
    return new Promise((resolve, reject) => {
        var captcha = svgCaptcha.create({
            // 翻转颜色 
            inverse: false,
            // 字体大小 
            fontSize: 36,
            // 噪声线条数 
            noise: 2,
            // 宽度 
            width: 80,
            // 高度 
            height: 45,
            ignoreChars: '0o1i',
            background: '#eee'
        });
        let text=captcha.text.toLowerCase()
        ctx.session.captcha = text
        resolve(captcha.data)
    })
}

function validateQues(ctx, next) {
    return new Promise((resolve, reject) => {
        let username = ctx.request.body.username
        let body = ctx.request.body
        sql.query(`SELECT * FROM users WHERE username = '${body.username}'`, null).then(res => {
            if (!res.length) {
                resolve({
                    msg: '该手机号未注册！',
                    state: '0',
                    data: null
                })
                return
            }
            if (res[0].fathername != body.fathername) {
                resolve({
                    msg: '密保问题一答案错误！',
                    state: '0',
                    data: null
                })
                return
            }
            if (res[0].mothername != body.mothername) {
                resolve({
                    msg: '密保问题二答案错误！',
                    state: '0',
                    data: null
                })
                return
            }
            if (res[0].othername != body.othername) {
                resolve({
                    msg: '密保问题三答案错误！',
                    state: '0',
                    data: null
                })
                return
            }
            resolve({
                msg: '',
                state: '200',
                data: null
            })
        })
    })
}

function resetPass(ctx, next) {
    return new Promise((resolve, reject) => {
        let body = ctx.request.body
        console.log(body)
        sql.query(`update users set password ='${body.password}' where username ='${body.username}'`, null).then(() => {
            resolve({
                msg: '密码已重置！',
                state: '200',
                data: null
            })
        })
    })
}


module.exports = {
    loginIn,
    register,
    getCaptcha,
    validateQues,
    resetPass
}