// function outeset () {

//     var c = 20

//     function outer(b){

//         function inner () {
//             console.log(a, b, c);
//         }
    
//         let a = 10;
    
//         return inner;
//     }

//     let a = 1000;
//     return outer;
// }

// outeset()('Hi')();



//Data hiding
// function counter(){
//     var count = 0;

//     return function incrementCounter (){
//         count++;
//         console.log(count);
//     }
// }

// var counter1 = counter();
// counter1() // 1
// counter1() // 2

// var counter2 = counter();
// counter2() // 1
// counter2() // 2
// counter2() // 3



// Constructor function
function Counter() {
    var count = 0;

    this.incrementCount = function(){
        count++;
        console.log(count);
    }


    this.decrementCount = function(){
        count--;
        console.log(count);
    }

}

var counter1 = new Counter();
counter1.incrementCount();
counter1.decrementCount();