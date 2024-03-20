// function x(){
//     console.log('x');
// }
// function y(x){
//     x();
// }
// y(x);
// // X is the callback function and the y is the High order function



// Functional Programming Example


// const radius = [3,1,2,4];
// const calArea = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }
// const calCurcumference = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }
// const calDia = function (radius) {
//     const output = [];
//     for (let i = 0; i < radius.length; i++) {
//         output.push(2 * radius[i]);
//     }
//     return output;
// }
// console.log(calArea(radius));
// console.log(calCurcumference(radius));
// console.log(calDia(radius));



// Now optimize the upper code
const radius = [3,1,2,4];

const area = function (r) {
    return Math.PI * r * r;
};

const circumfarence = function (r) {
    return 2 * Math.PI * r;
};

const diameter = function (r) {
    return 2 * r;
};

const calculate = function (arr, logic) {
    const output = [];
    for (let i = 0; i < arr.length; i++) {
        output.push(logic(arr[i]));
    }
    return output;
}

console.log(calculate(radius, area));
// console.log(calculate(radius, circumfarence));
// console.log(calculate(radius, diameter));


console.log(radius.map(area)); 