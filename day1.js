/*What is Execution Context?
Execution Context = Environment where JavaScript runs your code.
There are two types:
Global Execution Context (GEC): The default one. Created when your JS file starts.
Function Execution Context (FEC): Created when you call a function. 


How JavaScript Executes Code (Two Phases)
JavaScript engine does this in two phases:
1. Memory Creation Phase (a.k.a. “Hoisting” phase):
    1. All variables are set to undefined
    2. Functions are stored in memory

2. Execution Phase:
    1. Code runs line by line
    2. Values are assigned to variables
    3. Functions are executed */

 //Hoisting
//JavaScript moves declarations to the top during memory phase.   

// console.log(x); //undefine
//var x=5;
//but if you use let or const
//console.log(y); //reference error
//let y=10;

/*What is Temporal Dead Zone (TDZ)?
The Temporal Dead Zone is the time gap between:
   When a variable is declared (hoisted)
   And when it is initialized (given a value)
If you try to access that variable before it's initialized, JavaScript throws an error ❌
Not undefined, but a big angry: ReferenceError


What is the Call Stack in JavaScript?
   When a function is called, it goes to the call stack.
   When it finishes, it’s removed (LIFO: Last In First Out)
   JavaScript uses it to keep track of which function is running right now and what to do next.
It follows this rule:
  LIFO → Last In, First Out
  The last function that goes in is the first one to come out.


Why Do We Need a Call Stack?
  JavaScript is single-threaded — it does one thing at a time.
  So when it runs your code, it uses the call stack to:
     Know what function is being executed
     Remember where to go back when that function is done  */

//   function greet() {
//     console.log("Hello marsi");
//   }
//   function start(){
//     greet();
//   } 
//   console.log(start); 

//What is "use strict" in JavaScript?
  //It is a special rule mode that makes your code cleaner, safer, and smarter.
  //You just write this at the top of your file or function: 
//Without "use strict", JavaScript is very forgiving and lets you make silly mistakes.
//But with "use strict", it will catch errors early and stop bad code.

//"use strict";
//n = 5;
//console.log(n)// n is not define 

/*What is Hoisting?
 Hoisting means:
   JavaScript moves declarations (like var, function) to the top of their scope 
   before running the code.Even if you write it at the bottom,
   JavaScript acts like it's at the top!But only declarations, not values!*/

//console.log(name);  //  What will this print?
//var name = "Marsii";
//var name;           // (hoisted)
//console.log(name);  // → undefined
//name = "Marsii";

greet(); // ✅ works!

function greet() {
  console.log("Hello Marsii! ");
}
//✅ This runs perfectly! Because function declarations are hoisted!


/*What Does “Single-Threaded” Mean?
JavaScript has one main thread to execute code.
This means:
    Only one task runs at a time
    It follows the top to bottom line-by-line execution
    No multitasking by default ❌*/

console.log("1"); 
console.log("2");
console.log("3"); 
console.log("4");  


/*What is Execution Context?
   When JavaScript runs any code, it creates an execution context.
There are 2 types:

✅ Global Execution Context
  Created when your JS file first runs
  Anything outside functions
Only one per program
✅ Functional Execution Context
  Created whenever a function is called
  Each function gets its own context*/

/*IIFE (Immediately Invoked Function Expression)
What is it?
  A function that runs immediately after it’s defined.
  It creates a private scope
  Used to avoid polluting global variables */

  (function(){
    console.log("i run immediately");
  }) ();
  (function(){
    console.log("my name is marsi");
  }) ();

////What is a Closure?
  //Closure = Function + Remembered Scope
  //A function remembers the variables from where it was created — even after that place is gone.

function outer() {
  let name = "Marsii";
  return function inner() {
    console.log("Hello " + name);
  };
}
let greett = outer();   // outer() finishes, but inner() is returned
greett();               // Hello Marsii

  



  



  



  


     
