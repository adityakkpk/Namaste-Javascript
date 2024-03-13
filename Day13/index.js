//Function Statement / Function Declaration
function a(){
    console.log("a called");
}

//Function Expression
var b = function () {
    console.log('b called');
}

//Anonymous Function
// function () {}

// Named Function Expression
var c = function x() {
    console.log('x, c called');
    console.log(x);// you can access it here.
}

c();//x, c called
x();//uncaugh reference error

// Parameters and Arguments
var d = function (param1, param2){
    console.log('d called');
}

// First calss functions
var z = function(par1){
    console.log(par1);
}
z(function (){});

var f = function(){
    return function () {}
}
console.log(f);