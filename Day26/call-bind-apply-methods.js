let name1 = {
    fname: "Aditya",
    lname: "kumar",
}
const printFullName = function(hometown, state) {
    console.log(this.fname+ " " + this.lname + " from " + hometown + ", " + state);
}

printFullName.call(name1, 'Gopalganj', 'Bihar');

let name2 = {
    fname: "Ayush",
    lname: "Kumar",
}

// function borrowing

// call method
printFullName.call(name2, "Aurangabad", "Bihar");


// apply method
printFullName.apply(name2, ["Aurangabad", 'Bihar']);

//bind method
let sayMyName = printFullName.bind(name1, "Gopalganj", "Bihar");
sayMyName()