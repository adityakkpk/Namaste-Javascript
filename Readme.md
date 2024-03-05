In this repositiry you will find all the codes of Javascript which i have learned from *'Namaste Javascript'* playlist available on **Akshay Saini's** Youtube channel.

#### Below you will find my Day by Day learnings

---
### Day 1

* Core Fundamentals
> "Everything in Javascript happens inside an **Execution Context**"

> "Javascript is a **synchronous single-threaded** language"

* Execution Context
* synchronous single-threaded

---
### Day 2 

* How Javascript Code is Executed?
* Call Stack

---
### Day 3 - Hoisting

* What is Histing ?
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

* In memory creation phase variables are assigned 'undefined'. Which means variable id declared but it doesnot assign any value.

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