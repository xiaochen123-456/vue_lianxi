
//后台登陆与权限管理
exports.info = async(req,res,next)=>{
    try{
        // 1。数据验证
        // 2.生成token
        // 3.发送成功响应
        res.send('denglu')
    }catch(err){
        next(err)
    }
}

exports.login = async(req,res,next)=>{
    try{
        // 1。数据验证
        // 2.生成token
        // 3.发送成功响应
        res.send('denglu')
    }catch(err){
        next(err)
    }
}
