const fs=require("fs");
const http=require("http");
const path=require("path");
var path1=process.argv[2];
var filePath=path.join(__dirname,"/"+path1);
http.createServer(function(req,res){
    if(path1==undefined){
        var htmlPath=path.join(__dirname,"/fileReader1.js");
        var htmlContent=fs.readFileSync(htmlPath);
        htmlContent=htmlContent.toString("utf-8");
        console.log( htmlContent);
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(htmlContent);
        res.end();
    }
    else{
        fs.readFile(filePath,function(err,data){
            if(err){
                console.log(err);
                res.end();
            }
            else{
                console.log(data.toString());
                res.write(data);
                res.end();
            }
        });
    }
}).listen(8081);
console.log("server is listening 8081!");