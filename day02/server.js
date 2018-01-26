const http = require('http');
const fs = require('fs');
/*
fs是filesystem的缩写，该模块提供本地文件的读写能力;
文件 I/O 是对标准 POSIX 函数的简单封装。
所有的方法都有异步和同步的形式。

*/
/**
 *fs--读写文件，提供同步和异步的方法
 * 通常使用异步方法，关于异步的方法：这些方法的最后一个参数都是回掉函数
 * 
 */
/**
 * 读文件方法：
 * readFile方法用于异步读取数据：。
 * fs.readFile()：第一个参数是文件路径，第二个是回掉函数，该函数第一个参数是eerror 第二个是data
 */
const server = http.createServer((req,res)=>{
    const file_name = 'www'+req.url;
    console.log(file_name+'来了')
    fs.readFile(file_name,(error,data)=>{
        if(error){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end();
    })   

})
server.listen(8000);