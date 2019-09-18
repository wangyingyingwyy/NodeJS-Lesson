var dog=require("./dog.js");
var dog1=new dog("taidi",5);
var dog2=new dog("zangao",8);
function barkFun(){
    console.log(this.name+" bark!"+"energy:"+this.energy);
}
dog1.on("bark!",barkFun);
dog2.on("bark!",barkFun);
var intervalId=setInterval(() => {
    if(dog1.energy>=0 && dog2.energy>=0){
        dog1.emit("bark!");
        dog2.emit("bark!");
    }
    else{
        intervalId.unref();
    }
    dog1.energy=dog1.energy-1;
    dog2.energy=dog2.energy-1;
}, 1000);