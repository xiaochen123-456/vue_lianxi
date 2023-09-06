const { User } = require('../model')
const jwt =require('../util/jwt')
const { jwtSecret } = require('../config/config.defalut')
// 用户登录
exports.login = async(req,res,next)=>{
    try{
        // 1.数据验证
        //2.生成token
        const user = req.user.toJSON()
        const token = await jwt.sign({
            userId:user._id
        },jwtSecret)
        // 3.发送成功响应
        delete user.password
        res.status(200).json({
            ...user,
            token
        })
        console.log(user.username);
    }catch(err){
        next(err)
    }
}

// 用户注册
exports.register = async(req,res,next)=>{
    try{
        // 1.获取请求体数据
    //    console.log(req.body);
        // 2.数据验证

        // 3.验证通过，将数据存储到数据库
        let user = new User(req.body.user)

        // 保存到数据库
        await user.save()

        user=user.toJSON()
        delete user.password
       
        // 4.发送成功响应
       res.status(201).json({
        user
       })
    }catch(err){
        next(err)
    }
}
// 获取当前用户登录
exports.getCurrentUser = async(req,res,next)=>{
    try{
        
        res.send('getCurrentUser')
    }catch(err){
        next(err)
    }
}

// 更新当前登录用户
exports.updategetCurrentUser = async(req,res,next)=>{
    try{
        
        res.send('updategetCurrentUser')
    }catch(err){
        next(err)
    }
}
