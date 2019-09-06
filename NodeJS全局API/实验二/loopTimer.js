function loop(){
    console.log("I will loop forever");
}


function loopTimer1(){
    setInterval(function(){
        loop();
    },500);
}
loopTimer1();
function loopTimer2(){
    setTimeout(function(){
        console.log("Game Over!");
    },5000);
}
loopTimer2();
process.exit();