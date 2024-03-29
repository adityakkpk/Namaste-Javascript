const p1 = new Promise((res, rej) =>{
    // setTimeout(()=>res('P1 Success'), 3000)
    setTimeout(()=>rej('P1 Fail'), 3000)
})

const p2 = new Promise((res, rej) =>{
    // setTimeout(()=>res('P2 Success'), 5000)
    setTimeout(()=>rej('P2 Fail', 1000))
})

const p3 = new Promise((res, rej) =>{
    // setTimeout(()=>res('P3 Success', 2000))
    setTimeout(()=>rej('P3 Fail'), 2000)
})

// Promise.all([p1,p2,p3])
//     .then(result => console.log(result))
//     .catch((err) => console.error(err));

// Promise.allSettled([p1,p2,p3])
//     .then(result => console.log(result))
//     .catch((err) => console.error(err));

// Promise.race([p1,p2,p3])
//     .then(result => console.log(result))
//     .catch((err) => console.error(err));

Promise.any([p1,p2,p3])
    .then(result => console.log(result))
    .catch((err) => {
        console.log(err.errors);
        console.error(err)
    });