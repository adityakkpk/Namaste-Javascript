"use strict";

// this in globaal space

console.log(this);

// this inside a function

function x(){
    console.log(this);
}



// how this is called
x();//undefined
window.x();// window


//'this' inside object's method

const obj = {
    a: 10,
    x: function(){
        console.log(this);
    }
}

obj.x()