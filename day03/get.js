const http = require('http');
const querystrinng = require('querystring');
const fs = require('fs');
const liburl = require('url');
// url模块提供了一些实用函数，用于 URL 处理与解析。
// 一个 URL 字符串是一个结构化的字符串，它包含多个有意义的组成部分。 
//当被解析时，会返回一个 URL 对象，它包含每个组成部分作为属性。
//解析一个URL的方法: url.parse();
//此方法可以接收第二个参数:true,第二个参数可以将url的数据字符串解析成js


http.createServer((req,res)=>{
    const url = liburl.parse(req.url);
    const file_name = 'www'+url.pathname;
    const GET = url.query;//获取到get的数据z
    fs.readFile(file_name,(error,data)=>{
        if(error){
            res.write('404')
        }else{
            switch(url.pathname){
                case 'a':
                //res.write(file_data); 
                break;
                default:
                res.write(data);

            }
        }
        res.end();
    })   

}).listen(8087)


// Url {
//     protocol: null,
//     slashes: null,
//     auth: null,
//     host: null,
//     port: null,
//     hostname: null,
//     hash: null,
//     search: null,
//     query: null,
//     pathname: '/1.html',
//     path: '/1.html',
//     href: '/1.html' }