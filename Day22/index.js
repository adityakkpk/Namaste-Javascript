const cart = ["shoes","pants", "kurta"];

createOreder(cart)
    .then(function (orderId) {
        console.log(orderId);
        return orderId;
    })
    .catch((err) =>{
        console.log(err.message);
    })
    .then(function (orderId){
        return proceedToPayment(orderId)
    })
    .then((paymentInfo)=>{
        console.log(paymentInfo);
    })
    .catch((err) =>{
        console.log(err.message);
    })
    .then(function (orderId){
        console.log("No matter what hapens, I will definately will called.");
    })

function createOreder(cart){

    const pr = new Promise(function (resolve, reject) {
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            reject(new Error("Cart in not Valid. :("));
        }

        const orderId = "12345";

        if(orderId){
            setTimeout(() => {
                resolve(orderId);
            }, 5000);
        }
    });


    return pr;

}

function proceedToPayment (orderId) {
    return new Promise((resolve, reject) => {
        resolve("Payment Successfull. :)")
    })
}

function validateCart(cart){
    
    return false;
}