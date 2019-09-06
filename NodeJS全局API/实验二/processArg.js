/**
 * 1、传入命令行参数，是一个算数运算式 1*2+3
 * 2、程序将算数运算式计算得到结果，并在控制台输出
 * 1*2+3=5；   eval()
 * 3、程序判断一下是否传入了命令行参数，如果没有传入
 * 控制输出，“命令行参数错误！”；
 */


 if(process.argv[2]==undefined){
     console.log("命令行参数错误！");
 }
 else if(process.argv[2]=='-h'){
    console.log("帮助：命令参数需要为算术运算式");
 }
 else{
     var result=eval(process.argv[2]);
     console.log(process.argv[2]+"=%s",result);
 }