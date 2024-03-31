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

const p = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!!")
    }, 5000);
});

// function getData(){
//     // here JS engine will not wait here for promise to resolve
//     p.then(res => console.log(res))
//     console.log("JS");
// }
// getData();

async function handlePromise (){
    console.log("Hii");
    // here JS engine is waiting for promise to resolve
    const data = await p;
    console.log("JS");
    console.log(data);
}
handlePromise();