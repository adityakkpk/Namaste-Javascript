In this repositiry you will find all the codes of Javascript which i have learned from *'Namaste Javascript'* playlist available on **Akshay Saini's** Youtube channel.

#### Below you will find my Day by Day learnings

---
### Day 1 - Introduction

* Core Fundamentals
> "Everything in Javascript happens inside an **Execution Context**"

> "Javascript is a **synchronous single-threaded** language"

* Execution Context
* synchronous single-threaded

---
### Day 2 - How Javascript works?

* How Javascript Code is Executed?
* Call Stack

---
### Day 3 - Hoisting

* What is Hoisting ?
* How it works?
* Call Stack Demo

---
### Day 4 - How Functions work in JS and Variable Environment

* Function Invocation.
* How the call stack works behind the scene
* Demo of Variable Environment and call stack in Browser

---
### Day 5 - Shortest Javascript Program

* When we crete a JS, javascript engine creates a globla object. In Browsers it is known as **'window'** object.

* Even though our file is empty JS will create a global object.

* **'window'** is a globla Object. It is created with the Global Execution Context.

* With the creation of Global Execution Context, **'this'** is also created.

* At the global level ``` this === window ```

---
### Day 6 - undefined vs not defined in JS

* In memory creation phase variables are assigned 'undefined'. Which means variable is declared but it does not assign any value.

* Not defined means, variable is not declared in the peogram.

* Javascript is a loosely typed lanuage.

---
### Day 7 - The Scope Chain, Scope & Lexical Environment

* **Scope:**
    - It means where you can access a specific variable or function in our code.
    - Scope is directly dependent upon the lexical environment.

* **Lexical Environment:** 
    - lexical means in a hierarchey or in a sequence.
    - Wheneve an execitopn contex is created a lexical environment is also created.
    - Lexical Environment is the local memory along with the reference to the lexical parent.
    - In memory creation phase along with the variable or function references another reference is created for the parent lexical environment. This refers to the varibles and functions of the parent environment.

* **Scope Chain**
    - Scope chain is nothing but it is the chain of lexical environment's reference to their parent lexical environment.

---
### Day 8 - let & const in JS 🔥Temporal Dead Zone

* **let and Const**:
    - 'let and const' are strict variable declaration than var.
    - 'let and const' declarations are **Hoisted**.
    - They are in the **Temporal Dead Zone** for the time being.
    - When we declare a variable with 'let or const' they are assigned memory but in different place not in Global object.
    - You cannot access this let and const declaration before initialization.
    - When we declare a variable with 'let or const' they are not present in *window* object. They are present in some other place.

* **Temporal Dead Zone**:
    - Since let and const variables ae declared till they assigned some values that time between that is known as *Temporal Dead Zone*.

* **Const** :
    - const is more strict variable declaration than let.
    - If we declare a variable with const we have to assign some value to it otherwise it will give an *SyntexError*.

* **Syntex Error, Type Error and Reference Error**: 
    - *Syntex Error* :
        - If you write any thing which are not in syntex, thenJS will give you  Syntex Error.
    
    - *Type Error* :
        - When you try to assign another value in const variable it will give you type error. Because it is a const typed variable.
        
    - *Reference Error* :
        - When JS try to find a variable in memory space and you cannot access it then JS gives an Reference Error.

* **Best Practices** :
    - Always put your declaration and initialization on the top of your program.
    - Try to use 'const' to declare a variable whenever possible.
    - If not const use 'let' to declare a variable whenever possible.
    - Keep 'var' aside don't use frequently. There might be some cases where you will use 'var' but use it very consciously.
---
### Day 9 - BLOCK SCOPE & Shadowing in JS

* **BLOCK**:
    - {} it is known as Block.
    - {} it is also known as Compound Statement
    - Why to use Blocks?
        - We need to group these statements together so that we can use multiple statement in a place where JS expects only one statement.
    - Example : 'if()' condition expects only one statement only. But if we want to execute more than one statements we need to group them into a Block('{}').

* **BLOCK SCOPE**:
    - All the variables and functions we can access in the block.
    - 'let and const are blocked scoped'.
    - we cannot access let and const outside the block.
    - It also follow lexical scope.
    - All the scope rulrs works with the function is also work with the Arrow functions.

* **SHADOWING**:
    - If you have same variable name outside the block, inner variable shadows the outer variable.
    - It behaves same in both(functions and variables).
* **Illegal Shadowing**:
    - Shadowing let or const variable inside block with var is illegal shadowing.

---
### Day 10 - Closures and Currying in JS 🔥 

* **Closure**:
    - Closure is a function bind together to its lexical environment.
    - Function along with its lexical scope forms a closure.
    - When we return a function from a function then the returned function maintain their lexical environment. This situaton is the example of closure in JS.
    - In closuers the value of variables are not garbage collected.

* *Uses of Closures*:
    - Module Design Pattern
    - Currying
    - Function like once
    - memoize
    - maintaining state in async world
    - setTimeouts
    - Iterators

* **Currying**:
    - The concept of currying comes into play when you don't want to run the function until all the function parameters ain't available. 
    - A situation like this may arrive when you are taking data from different APIs.

---
### Day 11 - setTimeout + Closures Interview Question 🔥

* Understand BTS of Closures with setTimeout();

---
### Day 12 - CRAZY JS INTERVIEW 🤯ft. Closures

* Show some interview questions on closures.
* Data hiding by closures
* Constructor functions 
* *Disadvantages*
    - Overconsumption of memory
    - If Garbage collection is not handled properly it can lead to memory leaks and it can also freez the browser.

* **Garbage Collector**:
    - It is a program in JS engine which frees un-utilized memory.


---
## Day 13 - FIRST CLASS FUNCTIONS 🔥ft. Anonymous Functions 

* **Function Statement/Function Declaration and Function Expression**
    - The main difference between Function Statement and Function Expression is Hoisting.

* **Anonymous Function**
    - Function without a name is known as a Anonymous function.
    - Anonymous functions does not have their own identity.
    - Anonymous functions are used at that place where functions are used as values.
    - In Function Statement/Function Declaration you cannot use anonymous function but in case of Function Expression (assigning a function to a variable) you can us anonymous function.

* **Named Function Expression**
    - Assigning a named function to a variable is known as Named Function Expression.
    - If we call this function with its name intead of variable name it will give an uncaugh reference error.
    -You can access this function inside itself with its name but you caanot acesss it outside with its name.

* **Parameters & Arguments**
    - Parameters are the local variables inside the function scope.
    - Arguments are the variables which are passed in functions when we try to acess functions.

* **First class Function**
    - The ability to use functions as values are known as First class function.
    - The ability to pass a function as an argument to a function.
    - The ability to return a function from a function.

* **First class Citizens**
    - Functions are First Class Citizens.
    - First Class Citizens/Functions both are same things.

* **Arrow Function**
    - This thing comes as a part in ES6.
    - All thse upper functions can be written usinf arrow functions.

---
## Day 14 - Callback Functions in JS ft. Event Listeners 🔥

* **Callback Function**
    - Functions are first class citizens of JS that means you can take a function and pass it to another function. And when you do so, you pass a function to another function, the function which you pass to another function is known as callback function.
    - Callback functions give us the access to the whole asynchronus world in a synchronous single threaded language.

* **Bloking of the main thread**
    - In JS everything is run by a callstack. If you write a code that takes time longer than usual it will block the flow for some time. This situation is known as the blocking of the main thread.
    - To tackel this situation we use callback, setTimeout like functions.

* **Event Listeners**

* **Closuers along with Event Listeners**

* **Garbage collection & removeEventListenenrs**
    - Eventlisteners are heavy that means it takes memory. Even the call stack is empty, Eventlisteners does not free the memory. That is why we have to remove Eventlisteners.

---
## Day 15 - 