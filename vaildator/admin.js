const vaildate = require('../middleware/vaildate')
const {body} = require('express-validator')
const {User} = require('../model')



exports.login =[//配置验证规则
vaildate([
    body('username').notEmpty().withMessage('用户名不能为空'),
    body('password').notEmpty().withMessage('密码不能为空')
]),

vaildate([
    body('username').custom(async (username,{ req })=>{
        const user = await User.findOne({ username })
        if(!user){
            return Promise.reject('用户不存在')
        }
        // 将数据挂载到数据请求对象中，后续的中间件也可以使用了
        req.user = user
    })
]),

vaildate([
    body('password').custom(async (password,{ req })=>{
        if(md5('hunru'+password) != req.user.password){
            return Promise.reject('密码错误') 
        }
    })
])

]