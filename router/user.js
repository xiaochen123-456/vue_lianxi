const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user')
const userValidator = require('../vaildator/user')

// 用户登录
router.post('/users/login',userValidator.login, userCtrl.login)
// 用户注册
router.post('/users',userValidator.register,userCtrl.register)
// 获取当前登录用户
router.get('/user',userCtrl.getCurrentUser)
// 更新用户
router.put('/user',userCtrl.updategetCurrentUser)



module.exports = router

