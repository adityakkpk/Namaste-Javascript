Closures
// ---------
/**

// function x(){
//     var a = 10;
//     function y (){
//         console.log(a);
//     }
//     a = 100;
//     return y;
// }
// var z = x();
// console.log(z);

// z();



// function z(){
//     var b = 700;
//     function x(){
//         var a = 10;
//         function y (){
//             console.log(a, b);
//         }
//         a = 100;
//         y();
//     }
//     x();
// }
// z();

 */














Currying
/**
 * --------
 

// let multiply = function (x, y){
//     console.log(x*y);
// }

// let multiplyBy2 = multiply.bind(this, 2);

// let multiplyBy3 = multiply.bind(this, 3);






// let mul = function (x) {
//     return function (y) {
//         console.log(x * y);
//     }
// }

// let multiplyBy2 = mul(2);
// multiplyBy2(5);

// let multiplyBy3 = mul(3);
// multiplyBy3(5);



// let multiply = (a) => (b) => (c) => a*b*c;
// console.log(multiply(2)(3)(4));
 */