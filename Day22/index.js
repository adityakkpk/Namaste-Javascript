const cart = ["shoes","pants", "kurta"];

const promise = createOreder(cart);// orderId

promise.then(function (orderId) {
    console.log(orderId);
    //proceedToPayment(orderId);
})
.catch((err) =>{
    console.log(err.message);
})

function createOreder(cart){

    const pr = new Promise(function (resolve, reject) {
        //createOrder
        //validateCart
        //orderId
        if(!validateCart(cart)){
            reject(new Error("Cart in not Valid"));
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

function validateCart(cart){
    
    return false;
}