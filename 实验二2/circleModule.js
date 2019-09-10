
function circleFun(){
    var r;
    function  circumference(r){
        return 3.14*2*r;
    }
    function area(r){
        return 3.14*r*r;
    }
    
    return {
        circumference:circumference,
        area:area
    }
}
module.exports={
    circumference:circleFun().circumference,
    area:circleFun().area
};