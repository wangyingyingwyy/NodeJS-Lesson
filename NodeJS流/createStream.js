const stream=require("stream");


function MyReadable(){

}
MyReadable.prototype.__proto__=Readable.prototype;
var reader=new stream.MyReadable();
reader.push("abcdefghijklmnopqrstuvwxyz");
reader.push(null);
reader.pipe(process.stdout);