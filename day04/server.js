//引入模块
const http = require('http');
const fs = require('fs');
const liburl = require('url');
const querystring = require('querystring');

var userData = {'blue':'123','liuyu':'123'}
// 一个get方式的登陆注册
http.createServer((req,res)=>{   
    console.log('有人来了')
    //解析数据  
    var  str ="";
    req.on('data',(data)=>{
        str +=data;
    });
    req.on('end',()=>{
        var obj = liburl.parse(req.url,true);
        var url = obj.pathname;
        const GET = obj.query;//get的数据
        const POST = querystring.parse(str)//注意此时的str是拼接的字符串，字符串转js对象使用querystring
        if(url=="/user"){
            // console.log(str)
            if(userData[GET.user]==null){
                res.write('{"ok":"false",mes:"没有该用户"}')
            }else if(userData[GET.user]!=GET.pass){
                res.write('{"ok":"false",mes:"用户名或密码错误"}')
            }else{
                res.write('{"ok":"true",mes:"登陆成功"}')
            }
            res.end();
        }else{
            var file_name = 'www'+url;
            fs.readFile(file_name,(error,data)=>{
                if(error){
                    res.write('404')
                }else{
                    res.write(data)
                   
                }
                res.end();
            })
            
        }
    })
}).listen(8066)