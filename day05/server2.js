// 用express实现一个简单的注册登录
const express = require('express');
const expressStatic = require('express-static')//一个读取文件的中间件，基于express

var server = express();
server.listen(8087);

//简单的记录用户的数据
var userdata = {
    'a':'123',
    'liuyu':'123',
    'cat':'123'
}

//接口
//登陆：/login
//除了接口均为读取文件

server.use('/login',(req,res)=>{
    //express的req和原生的一样有提供的有获取数据的方法-query
    const user= req.query['user'];
    const pass = req.query['pass'];

    if(userdata[user]==null){
        res.send('用户不存在')
    }else if(userdata[user]!=userdata[user]){
        res.send('用户名或密码错误')
    }else{
        res.send('登陆成功')
    }

})

server.use(expressStatic('./www'));//其余的访问均是根据路径读取文件,中间件据需要注册

/**
 * expresss的request的方法
 * 
 * （1）request.ip

request.ip属性用于获得HTTP请求的IP地址。

（2）request.files

request.files用于获取上传的文件。
 * 
 * 
 */