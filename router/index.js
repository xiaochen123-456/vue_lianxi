const express = require('express')
const router = express.Router()


// 用户相关的路由
router.use(require('./user'))
// 用户资料相关路由
router.use('/profiles',require('./profiles'))
//管理员相关路由
router.use('/admin/acl/index',require('./admin'))




module.exports = router

