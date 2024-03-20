In this repositiry you will find all the codes of Javascript which i have learned from *'Namaste Javascript'* playlist available on **Akshay Saini's** Youtube channel.

# My Notes

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
## Day 15 - Asynchronous JavaScript & EVENT LOOP from scratch 🔥

* **Web API**
    - Web APIs are a part of Browsers.
    - JS is synchronous single threaded language, it has one call stack and it can only do one task at a time. The call stack is present in JS engine and all the code in JS executed in the call stack. 
    - In Browser we have JS engine, localstorage, timer, Bluetooth access etc. and inside JS engine we have call stack.
    - To access all the features of Browser we need Web APIs.
    - Some Web APIs are: 
        - setTimeout()
        - DOM APIs
        - fetch()
        - localStorage
        - console
        - Location 
    - The browser gives us access to Web APIs in JS engine's call stack to use all these featuers as *Global object*.
    - Global object is window. Browsers gives these Web APIs features to JS through a keyword *window*.

* **Event Loop**:
    - How setTimeout() works BTS?
        - Whenever we execute a JS code a global execution context is created an pushed inside the call stack and code is executed line by line.
        - setTimeout() calls the setTimeout Web API and calls the timer feature of Browser.
        - setTimeout() takes a callback function and some delay. So when we we call a setTimeout() function in our program it registers a callback in Web APIs environment and stars the timer as per the delay.
        - And the JS 
        - As soon as the timer expires, the callback function needs to be executed. At this time the execution context is poped out from the call stack as JS engine executed all the lines of code.
        - So To execute this callback of setTimeout(), *Event Loops* and *callback queue* comes into the picture.
        - As soon as the timer expires, the callback function needs to go to the call stack but it cannot go to the call stack directly. It goes to the call stack through the callback queue.
        - So when the timer expires, this callback is push inside the callback queue.
        - Event Loop checks the callback queue, if it finds a method it just pushed it into the call stack and then call stack executes this callback function.
        - Event loop works as an gate keeper.

    - How Event Listeners work in JS?
        - Whenever we execute a JS code a global execution context is created an pushed inside the call stack and code is executed line by line.
        - Whenever we do 'document.' the DOM web API is called. DOM is a tree like structure of HTML code.
        - When we call 'addeventListener' method it registers a callback on an event.
        - So the callback is stay in the Web API environment and waits for the event to trigger.
        - As soon as the event is triggered, the callback method is pushed into the callback queue and waits for its tern to executed.

    - What does event loop does?
        - The job of event loop is to monitor continuously call stack abd callback queue.
        - If the call stack is empty and there is a callback function is inside the callback queue, it just takes the function and push it into the call stack.
        - And then this callback is quickly executed.
    
    - Why we need callback queue?
        - If any point of time in our program multiple events are triggered at the same time, which make out code execution to slow. To make our execution fast we use callback queue. 
        - When multiple events are triggerd at the same time the callback queue holds all the callbacks and Event Loop pushes them one by one into the call stack and executes them without stoping the flow of the program. 

* **Fetch Web API**:
    - How fetch() method works BTS?
        - The fetch() is a Web API which is used to make networks calls. It returns a Promise and this promise is handled by callback functions.
        - As we call the fetch function in our code it makes a network call and registers the callback in Web API environment.
        - The callback function waits for the data to return from the server. As soon as data is returned from the server, the callback function will pushed into the microtask queue and with the help of event loop it will be pushed into the call stack and it will executed.

* **Microtask Queue**:
    - It is also a queue of callback functions as callback queue but it has higher priority than callback queue. 
    - All the functions related to Promises and Mutation observer goes inside this microtask queue. And event loops keeps checking the queue and pushes these function in call stack to execute.

* In case, if the callback of fetch and the callback of setTimeout are ready in their particular queues to be executed but the main thread is running so the both of the function will wait for the main thread to be execute first then the microtask queue's function will executed then the callback queue's function will execute. 

* The callback queue also known as the Task queue.

* **Starvation of functions in Callback queue**:
    - If there are multiple callbacks are inside the microtask queue and only one callback is inside the callback queue. The event loop will first execute all the callbacks from the microtask queue then it will execute the callback of callback queue. 
    - In case, If microtask is creating another microtask and this keeps going then the callback inside the callback queue will be not execute for a long time. This condition is known as **starvation**.

---
## Day 16 - JS Engine EXPOSED 🔥 Google's V8 Architecture 🚀 

* **Javascript Runtime Environment**
    - It is a container which has all the things which are required to run a Javascript code.
    - It has a JS Engine, some APIs, Event Loop, Callback Queue etc.
    - JS Engine is the heart of Jacascript Runtime Environment.

* **JS Engine**
    - List of JS Engines:
        - 'Chakra' used in Microsoft Edge.
        - 'SpiderMonkey' used in Microsoft Edge.
        - 'V8' used in Microsoft Edge.

    - First Js Engine:
        - 'Spider Monkey' was the fist JS engine which was created by "Brendan Eich" the creator of JS.

    - JS Engine Architecture:
        - It is not a machine, it is a programme which is written in low level languages. For example V8 engine is made up of C++.
        - JS Engine runs the code in Three phases :
            1) Parsing
            2) Compilation
            3) Execution

            1) Parsing :
                - During the parsing phase, the code which you write is brocken down in 'Tockens'. And there is something known as Syntex Parser which takes our code and converts it into AST (Abstract syntax tree)(astexplorer.net). Now this AST is passed to the Compilation Phase.
            
            - JS has something known as Just In Time Compilation. JS engine can use an interpreter along with compiler ant that makes it as Just In Time Compile language.
            - JIT Compiler uses interpreter and a compiler to execute tje JS code.
                
            2) Compilation and 3) Execution
                - AST coming from parsing phase is now goes to the interpreter ant the interpreter converts this high level code to byte code and the code moves to the execution phase. While it is donig all this work, it takes the help of the compiler to optimise the code. So while the code is optimized compiler also try to optimise the code as it can.

                - The execution is not possible without two major components of the JS engine. Those two components are "Memory Heap" and "Call Stack".

* **Garbage Collector**
    - GC uses 'Mark and Sweep Algorithm'.

* **Google's V8 Engine** 
    - It is the fastest JS engine is ever created. V8 has an interpreter named 'Ignition', compilet named 'Turbofan and GC named 'Orinoko'.

---
## Day 17 - TRUST ISSUES with setTimeout()

* **Why this Trust Issue ?**
    - Suppose we have many lines of code after the setTimeout() function which takes a lot of time to execute. In that case the Global Execution Context will be busy to execute these lines of code while the timer is running. Suppose GEC takes 10s to run those lines and the timer of setTimeout is 5s, So what happen is the GEC will keep running these lines after runnig these lines it will execute the setTimeout function's callback. So in this case you can see that the setTimeout() function is running after 10s even the timer gicen to setTimeout is 5s.

    - The setTimeout() function's timer was for 5s but it will wait for GEC to move out of the call stack. The setTimeout() will wait for the whole program to execute before its callback function to be pushed into the call stack. As soon as the GEC will move out from the call stack the event loop will put the callback function into the call stack and call stack will quickly execute the function.

* **setTimeout(()=> {}, 0)**:
    - Even if there is 0 millis the function has to go through the whole process of setTimeout API. The callback will be registerd in the web API environmet and even after the timer is expired it will wait for the wholw program to be executed first then the callback function will execute.

---
## Day 18 - High-Oreder Function

* **High-Oreder Function**:
    - A function that takes another function as an argument or returns a function from it.
    - Example: 
        ``` javascript
        function x(){
            console.log('x');
        }
        function y(x){
            x();
        }
        y(x);
        //Here, x is the callback function and the y is the High-order function

        ```
    - 