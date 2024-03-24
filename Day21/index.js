// const cart = ["shoes", "pants", "kurta"];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId);
// });

// const promise = createOrder(cart);

// promise.then(function (orderId) {
//     proceedToPayment(orderId);
// });


// Promise Object

// const user = fetch('https://api.github.com/users/adityakkpk');

// console.log(user); // promise-> pending
// // While this log statement is executed the user object is in pending state. because JS engine quickly executes the code and the fetch function returns a promise and this promise is in a "pending" state at the particular time. After some time the data will come inside the promise object so when we expend the promise it will show us the current state, PromiseState as fullfield.

// user.then(function (data) {
//     console.log(data);
// })


// Promise Chaining

createorder(cart)
    .then(function (orderId){
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo){
        return showorderSummary(paymentInfo);
    })
    .then(function (){
        return updateWalletBalanace();
    })