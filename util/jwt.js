const jwt = require('jsonwebtoken');
//基于回调的函数转换为基于 Promise 的函数
const {promisify} = require('util')

exports.sign = promisify(jwt.sign)

exports.verify = promisify(jwt.verify)

exports.decode = promisify(jwt.decode)

