const vaildate = require('../middleware/vaildate')
const {body} = require('express-validator')
const {User} = require('../model')
const md5 = require('../util/md5')

exports.register = vaildate([//配置验证规则
body('user.username').notEmpty().withMessage('用户名不能为空')
.custom(async username => {
    const user = await User.findOne({username})
    if(user){
        return Promise.reject('用户已存在')
    }
})
,
body('user.password').notEmpty().withMessage('密码不能为空')
])

exports.login = [
    vaildate([
        body('user.username').notEmpty().withMessage('用户名不能为空'),
        body('user.password').notEmpty().withMessage('密码不能为空')
    ]),
    vaildate([
        body('user.username').custom(async (username,{ req })=>{
            const user = await User.findOne({ username }).select('password')
            if(!user){
                return Promise.reject('用户不存在')
            }
            // 将数据挂载到数据请求对象中，后续的中间件也可以使用了
            req.user = user
            console.log(user.username);
        })
    ]),

    vaildate([
        body('user.password').custom(async (password,{ req })=>{
            if(md5('hunru'+password) != req.user.password){
                return Promise.reject('密码错误')
            }
        })
    ])
    
]