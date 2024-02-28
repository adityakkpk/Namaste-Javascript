// getName();// Aditya
// console.log(x);// undefined

// var x = 7;

// function getName(){
//     console.log("Aditya");
// }

/*
Beow code will give error that x is not defined
getName();
console.log(x);

function getName(){
    console.log("Aditya");
}
*/


/*
getName();
console.log(getName);

// it will allcocate {getName: {....whole function body......} } in the memory
function getName(){
    console.log("Aditya");
}

console.log(getName);
*/

/*
//Here getName behaves like as a variable not as a function
getName();
console.log(getName);

// it will allcocate {getName: undefined } in the memory
var getName = ()=>{
    console.log("Aditya");
}

console.log(getName);
*/


/*
//Here getName also behaves like variable
getName();
console.log(getName);

var getName = function () {
    console.log("Aditya");
}

console.log(getName);
*/