var a = 10 // Global Space

function b(){
    var b =10 // Not in Global Space
}

console.log(window.a);//10
console.log(a);//10
console.log(this.a);//10