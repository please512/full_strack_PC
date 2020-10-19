const sql = require('../../mysql/sql')
const md5 = require('../../utils/md5')
const svgCaptcha = require('svg-captcha');
const jwt = require('jsonwebtoken')

function send(ctx, next) {
    console.log('controller')
    return new Promise((resolve, reject) => {
        resolve({
            msg: '',
            state: '200',
            data: null
        })
    })
}

module.exports = {
    send
}