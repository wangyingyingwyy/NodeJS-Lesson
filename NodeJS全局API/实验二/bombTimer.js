console.time("test");

function Bomb(){
   
}
Bomb.prototype.message="bomb!!!";
Bomb.prototype.explode=function(){
        console.log(this.message);
    }
var bomb=new Bomb();
function loopTimer(){
    setTimeout(function(){
        bomb.explode();
    },2000);
}
loopTimer();
console.timeEnd("test");
