//Synchronus:- code runs line by line, Next line will wait until current line finish 
//code is executed one line at a time,in the order it appears.(eg:just like a queue)
//how synchronus work?(Behind the Scene)
//when js runs synchronusly it uses somethingcalled call stack

console.log("1");
console.log("2");
console.log("3");

//what is call stack?=>it is structure used to manage FUNCTION CALLS.it works like a stack of plates
//(LIFO=>LAST IN FIRST OUT)
function greet(){
    console.log("hellooo");
}
function start(){
    greet();
    console.log("welcome to js study");
}
start();

function myName(){
    console.log("marsiii");
}
function myHobbie(){
    myName();
  console.log("learning programming language");
}
myHobbie();
