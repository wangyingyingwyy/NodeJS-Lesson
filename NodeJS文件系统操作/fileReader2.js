const fs=require("fs");
const http=require("http");
const path=require("path");
var path1=process.argv[2];
var filePath=path.join(__dirname,"/"+path1);

http.createServer(function(req,res){
    if(fs.existsSync(filePath)){
        fs.open(filePath,"r+",function(err,fd){
            if(err){
                console.log(err);
            }
            else{
                var buf=Buffer.alloc(30);
                var len=fs.statSync(filePath).size;
                fs.read(fd,buf,0,len,0,function(err,bytesRead,buffer){
                    res.writeHead(200,{"Content-Type":"text/html;charset-utf-8"});
                    res.write(buffer.toString());

                });
            }
            fs.close(fd,function(err){
                res.end();
            })
        })
    }
    else{
        var htmlPath=path.join(__dirname,"/fileReader2.js");
        var htmlContent=fs.readFileSync(htmlPath);
        htmlContent=htmlContent.toString("utf-8");
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
}).listen(8081);
console.log("server is listening 8081!");