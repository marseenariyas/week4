/*Relationship Between window, Global Object, and the DOM
//what is global object?
in the browser the globalobject is window
the globalobject is main object in your environment 
thet hold everything thats global like variables ,functions etc.
let a=10;
window.a===10
In Browser (Like Chrome):*/
//The global object is  window
//So when you do:
//let name = "Marsi";
//It actually becomes:
//window.name === "Marsi"
//That means:
//window is like the parent of all global things.
//All global functions (like alert(), console.log(), setTimeout()) live in window.
//let x = 5;
//console.log(window.x); // 5

//function sayHi() {
  //console.log("Hellooo ");
//}
//window.sayHi(); // Also works 

//2. window Object (Boss of Browser )
//The window object represents the browser window. It includes:
//Everything global: alert(), setTimeout(), document, etc.
window.alert("Hello Marsi ");
alert("Hello Marsi ");


