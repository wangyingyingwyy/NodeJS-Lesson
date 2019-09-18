const fs=require("fs");
const http=require("http");
const path=require("path");

http.createServer(function(req,res){
    var filepath=path.join(__dirname,"/data.txt");
    var streamReader=fs.createReadStream(filepath);
    streamReader.pipe(res);

}).listen(8081);

console.log("server is listening 8081");