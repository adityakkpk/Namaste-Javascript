// console.log('Start');
// setTimeout(function cb(){
//     console.log('Callback');
// }, 5000)
// console.log('End');







// console.log('Start');
// setTimeout(function cb(){
//     console.log('Callback');
// }, 5000)
// console.log('End');
// // Blocking the main thread for 10s.
// let start = new Date().getTime();
// let end = start; 
// while(end < start + 10000){
//     if (end === start + 5000) console.log('5s done');
//     end = new Date().getTime();
// }
// console.log('10s done and while expire');






console.log('Start');
setTimeout(function cb(){
    console.log('Callback');
}, 0)
console.log('End');