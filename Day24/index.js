//Async Function
// async function getData(){
//     return p;
// }

// const p = new Promise ((resolve, reject) => {
//     resolve("Promise Resolved Value!!!")
// })

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res))





//Async Await together

// const p = new Promise ((resolve, reject) => {
//     resolve("Promise Resolved Value!!!")
// });

//Before Async Await 
// function getData(){
//     p.then(res => console.log(res))
// }
// getData()

// with async await
// async function handlePromise (){
//     const data = await p;
//     console.log(data);
// }
// handlePromise();



// Dive Deeper

const p1 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 10000);
});

const p2 = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 20000);
});

// function getData(){
//     // here JS engine will not wait here for promise to resolve
//     p.then(res => console.log(res))
//     console.log("JS");
// }
// getData();

async function handlePromise (){
    console.log("Hii");
    // here JS engine is waiting for promise to resolve (but it is not waiting)
    const data = await p1;
    console.log("JS 1");
    console.log(data);

    //
    const data2 = await p2;
    console.log("JS 2");
    console.log(data2);
}
handlePromise();
//As soon as the function is called by the call stack, the Execution context will be created for it and the variablea ans functions will be assigned memories and these promises will be start executing. In the code execution phase, when the poniter will move to line where the await is present it will wait for the Promise to settle and the function will be wiped out from the call stack if the promise is not settled. As soon as the promise will settle it will again pushed into the call stack and move farword and check if the next promise is resolved or not. If the promise is resolved it will continue the execution.