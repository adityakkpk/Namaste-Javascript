//Web APIs
// console.log('Start');// console Web API
// setTimeout(() => { // setTimeout Web API
//     console.log('Timer...');
// }, 1000);
// console.log('End');// console Web API


// Event Listeners
// console.log('Start');// console Web API
// document.getElementById('btn').addEventListener('click', function cb(){
//     console.log('Callback');
// })
// console.log('End');// console Web API


// fetch() method
console.log('Start');
setTimeout(function cb(){
    console.log('CB setTimeout');
}, 5000);
fetch('https://api.github.com/users/adityakkpk').
then(function cbf(){
    console.log('CB Github');
});
console.log('End');
