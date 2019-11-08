var express = require('express');
var router = express.Router();
var fs=require("fs");
var file=require('../config/data.json');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});
//登录
router.post('/login',function(req,res,next){
  var username=req.body.username;
  var pwd=req.body.pwd;
  console.log(file['users'][0].username);
  if(username==file['users'][0].username&&pwd==file['users'][0].password){
    var chapterList=file['chapterList'];
    res.render('list',{chaptersList:chapterList});
  }else{
      res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
      res.end("用户名、密码不正确");
  }
})
module.exports = router;
