"use strict";

// this in globaal space

console.log(this);

// this inside a function

function x(){
    console.log(this);
}



// how this is called
// x();//undefined
// window.x();// window


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
// student.printName()

const student2 = {
    name: 'deepak',
};

// student.printName.call(student2); // now the value of 'this' = student2




//'this' inside arrow function

const obj = {
    a: 10,
    x: () => {
        console.log(this);//window-> enclosed lexical context
    }
}
// obj.x();


const obj2 = {
    a: 10,
    x: function() {
        const y = ()=>{
            console.log(this);// {a:10, x: f} -> enclosed lexicql context
        }
        y();
    }
}
// obj2.x();


function a() {
    let name = "ad"
    function b() {
        console.log(this);
    }
    b();
}
a();