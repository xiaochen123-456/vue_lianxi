const express = require('express')
const router = express.Router()
const indexController = require('../controller/admin')
const IndexController = require('../vaildator/admin')



// 后台登陆与权限管理
router.get('/info',indexController.info)

// router.post('/login',indexController.login,IndexController.login)

// router.post('/logout',userValidator.login, userCtrl.login)

// router.get('/menu',userValidator.login, userCtrl.login)

module.exports = router
