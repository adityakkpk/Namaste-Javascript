// Real world Example to understand Async Await

// async function getData(){
//     const response = await fetch("https://api.github.com/users/adityakkpk");
//     // This fetch() gives you a promise. Basically it is a promise and when we execute fetch() it gives us the 'response' object. And this response object has a body which has a readable stream. And to change this readable stream to json we use .json() method. And this .json() also returns a promise, nd when it resolves it gives us the json valuse.
//     const jsonVal = await response.json();

//     console.log(jsonVal);

// }

// getData();

//Error Handling

// To handle Error we use try-catch methods 
async function getData(){
    
    try {
        const response = await fetch("https://api.github.com/users/adityakkpk");
        const jsonVal = await response.json();
        console.log(jsonVal);
    } catch (error) {
        console.log(error);
    }
}

getData();

// U can handle errors like this also 

// getData().catch((err) => {
//     console.log(err);
// })