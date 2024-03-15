// Callback Function

// setTimeout(function () {
//     console.log('Timer');
// }, 5000);

// function x(y){
//     console.log('x');
//     y();
// }
// x(function y(){
//     console.log('I am callback');
// })


// Event listeners

// document.getElementById('btn').addEventListener('click', function xyz(){
//     console.log('Button clicked');
// })



// Closuers along with Event Listeners

function attachEvent(){
    let count = 0;
    document.getElementById('btn').addEventListener('click', function xyz(){
        console.log('Button clicked', ++count);
    })
}

attachEvent();



// Garbage collection & removeEventListenenrs