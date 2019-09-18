//原生模块(核心模块)
const events=require("events");
const EventEmitter=events.EventEmitter;

function Dog(name,energy){
    EventEmitter.call(this);
    this.name=name;
    this.energy=energy;
    // var that=this;
    // var timeId=setInterval(function(){
    //     that.emit("bark");
    //     that.energy--;
    // },1000);
   
}
Dog.prototype.__proto__=EventEmitter.prototype;
// var dog=new Dog("taidi",5);
// var dog2=new Dog("zangao",8);
// dog.on("bark",function(){
//     console.log(this.name+" barked!"+"energy:"+this.energy);
//     if(this.energy==0){
//         timeId.unref();
//    }
// })
// dog2.on("bark",function(){
//     console.log(this.name+" barked!"+"energy:"+this.energy);
//     if(this.energy==0){
//         timeId.unref();
//    }
// })

module.exports=Dog;
