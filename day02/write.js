const fs = require('fs');

fs.writeFile('./www/b.txt','这是第一个写入的文件',function(err){
    console.log(err);
})