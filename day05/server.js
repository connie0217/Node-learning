const express = require('express');
const server = express();
server.listen('8090');
//靠use来处理用户相应的请求
// server.use('/',(req,res)=>{//当用户请求根目录的时候
// //注意这里的req,res斌那个不是原生的request  response;是属于非侵入式的或非破坏式；
// //原生有的他们都有  原生没有的他封装的也有
// //express有许多相关的中间件
//     res.send('请求对了');
//     res.end();
// })
/**
 * express的运行原理：
 * Express框架建立在node.js内置的http模块上。
 * 关键是http模块的createServer方法，表示生成一个HTTP服务器实例。、
 * 该方法接受一个回调函数，该回调函数的参数，分别为代表HTTP请求和HTTP回应的request对象和response对象。

Express框架的核心是对http模块的再包装
原来是用http.createServer方法新建一个app实例，现在则是用Express的构造方法，
生成一个Epress实例。两者的回调函数都是相同的。Express框架等于在http模块之上，加了一个中间层。
 * 
 */
/**什么是中间件？
 * 简单说，中间件（middleware）就是处理HTTP请求的函数。它最大的特点就是，一个中间件处理完，再传递给下一个中间件。App实例在运行过程中，会调用一系列的中间件。

每个中间件可以从App实例，接收三个参数，
依次为request对象（代表HTTP请求）、response对象（代表HTTP回应），next回调函数（代表下一个中间件）。
每个中间件都可以对HTTP请求（request对象）进行加工，并且决定是否调用next方法，将request对象再传给下一个中间件。
 * 
 * 
 */
/**use方法
 * 
 * 1.use是express注册中间件的方法，它返回一个函数。
 * 理解：require一个中间件，使用的话，需要先进行注册
 * 
 * 2.use方法内部可以对访问路径进行判断，
 * 据此就能实现简单的路由，根据不同的请求网址，返回不同的网页内容。
 * 理解：不管是get去请求的某路径还是post，都可以使用use
 * 
 * 
 */

/**
 * 
 * 注意，假设app.use方法一共登记了三个中间件，只要请求路径匹配，就不会将执行权交给下一个中间件。
 * 因此，最后一个中间件会返回404错误，即前面的中间件都没匹配请求路径，找不到所要请求的资源。
 * 
 * 上个例子
 */
server.use((req,res,next)=>{
    if(req.url=='/a'){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("Welcome to a");
    }else{
        next();
    }
});
server.use((req,res,next)=>{
    if(req.url=='/b'){
        res.writeHead(200,{"Content-Type": "text/plain"});
        res.end("Welcome to b");
    }else{
        next();
    }
})
server.use((req,res)=>{
    res.writeHead(404,{"Content-Type": "text/plain"});
        res.end("sorry to 404");
})

