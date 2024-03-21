// const arr = [5,1,2,3,4];

// Map function in JS

// function double (x){
//     return x*2;
// }

// const doubledArr = arr.map(double);
// console.log(doubledArr);

// function triple (x){
//     return x*3;
// }

// const tripleArr = arr.map(triple);
// console.log(tripleArr);


// function binary (x){
//     return x.toString(2);
// }

// const binaryArr = arr.map(binary);
// console.log(binaryArr);


// Filter function in JS

// const oddArr = arr.filter(function (x) {
//     return x%2;
// })

// const evenArr = arr.filter(function (x) {
//     return x%2 === 0;
// })

// console.log(oddArr);
// console.log(evenArr);


// Reduce function in JS

//normal function
// function findSum (arr){
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i]
//     }
//     return sum
// }
// console.log(findSum(arr));

// function findMax (arr){
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i] > max) max = arr[i];
//     }
//     return max
// }
// console.log(findMax(arr));

// with reduce function

// const sumOfArr = arr.reduce(function (acc, curr){
//     acc = acc + curr;
//     return acc;
// }, 0);

// console.log(sumOfArr);

// const maxOfArr = arr.reduce(function (acc, curr){
//     if(curr > acc) acc = curr
//     return acc;
// }, arr[0]);
// console.log(maxOfArr);




// Real world Example

const users = [
    { firstName: "Aditya", age: 20, gender: "male"},
    { firstName: "Aman", age: 18, gender: "male"},
    { firstName: "Hela", age: 20, gender: "female"},
    { firstName: "Alana", age: 22, gender: "female"},
];

// const firstNames = users.map(function (data) {
//     return data.firstName;
// })

// console.log(firstNames);


// const sameAges = users.reduce((acc, curr) => {

//     if(acc[curr.age]){
//         acc[curr.age]++;
//     }else {
//         acc[curr.age] = 1
//     }

//     return acc;

// }, {})

// console.log(sameAges);

const op = users.filter(x => x.age<20).map(x => x.firstName);
console.log(op);
