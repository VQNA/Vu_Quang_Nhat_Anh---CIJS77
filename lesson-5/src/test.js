function xocheck(array){
    var cross = Array.from(array).filter(a => a === "x")
    var circle = Array.from(array).filter(a => a === "o")
    if (cross.length == circle.length){
        return true
    }
    else if (cross.length != circle.length){
        return false
    }
    else{
        return true
    }
    
}
var a = xocheck("zzoo")
console.log(a)