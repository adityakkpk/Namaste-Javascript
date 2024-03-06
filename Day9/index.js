// Block
// {
//     // This is a block or Compound Statement
//     var a = 10;
//     console.log(a);
// }


// Blocked SCOPE
// {
//     var a = 10;
//     let b = 20;
//     const c = 2;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//2
// }
// console.log(a);//10
// console.log(b);// Error
// console.log(c);

//SHADOWNIG
// var a = 100;
// {
//     var a = 10;//shadowing
//     let b = 20;
//     const c = 2;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//2
// }
// console.log(a);//10

// var b = 100;
// {
//     var a = 10;
//     let b = 20;//shadowing
//     const c = 2;
//     console.log(a);//10
//     console.log(b);//20
//     console.log(c);//2
// }
// console.log(b);//100 //Because let has blocked scope

// Illegal Shadowing
// let a = 20;
// {
//     var a = 20;
// }

// this is fine
// let a = 20;
// function x(){
//     var a = 20;
// }


// Lexical Scope Block
const a = 2000;
{
    const a = 1000;
    {
        const a =5000;
        console.log(a);
    }
}