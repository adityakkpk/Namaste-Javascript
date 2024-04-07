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

// const obj = {
//     a: 10,
//     x: function(){
//         console.log(this);
//     }
// }
// obj.x()



// call apply bind methods

const student = {
    name: "aditya",
    printName: function(){
        console.log(this.name);// vlaue of 'this' = student
    }
}
student.printName()

const student2 = {
    name: 'deepak',
};

student.printName.call(student2); // now the value of 'this' = student2