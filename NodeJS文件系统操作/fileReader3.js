const fs=require("fs");
const http=require("http");
const path=require("path");
var path1=process.argv[2];
http.createServer(function(req,res){
    if(path1==undefined){
        var streamReader=fs.createReadStream(process.argv[1]);
        res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});  
        streamReader.pipe(res);
    }
    else{
        var pathName=path.join(__dirname,path1);
        if(fs.existsSync(pathName)){
            var streamReader=fs.createReadStream(pathName);
            streamReader.pipe(res);
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
            res.end("文件不存在");
            console.log("文件不存在");
        }
        
    }
}).listen(8081);
console.log("server is listening 8081!");