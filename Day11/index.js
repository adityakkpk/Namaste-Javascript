// function x() {
//     var i = 1;
//     setTimeout(function(){
//         console.log(i);
//     }, 3000);
//     console.log('Namaste');
// }
// x();
// o/p
// Namaste 
// 1



// function x() {
//     for(var i = 1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste");
// }
// x();
// o/p
// Namaste
// 6
// 6
// 6
// 6
// 6

// Fix 1
// function x() {
//     for(let i = 1; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Namaste");
// }
// x();

// By using let here, it will create a block scope for variable i.
// Whenever the loop will run the i will be new copy of i altogether and each time setTimeout will run, the function has new copy of i with it.

// These let variables are blocked scoped, so each and every time setTimeout is called, the functions forms a closures with new variables itself. That means copy of i is new in each iteration.

// Fix 2
function x() {
    for(let i = 1; i <= 5; i++){
        function close(x) {  
            setTimeout(function(){
                console.log(x);
            }, x * 1000);
        }
        close(i);
    }
    console.log("Namaste");
}
// x();