//ASYNCHRONOUS-> continue executing without waiting. handle long Task (like API calls,timer etc)in the background.
//this is how your browser stays smooth and fast,even when waithing fof something.

//how it work?   js is a single threaded.(1 task at a time) but it works smartly using
// call stack:- execute code line by line,function go in-finish-then pop out,execute normal js code
// web API (provided by browser):- when you call setTimeout,fetch,etc js says "okey this will take time
// i will send it to the webAPI and keep going". So the long task goes out side the call stack handeld by browse
// handled slow task like timer/fetch etc..
// Call back queue:- once the async task is done,browser puts the call back here.,holds finished async tasks.
// event loop(Boss of all):- it keeps watching. is call stack is empty?if yes=>it picks a function from callback
// queue and puts it in to the call stack, moves ready tasks back to call stack.
/*console.log("1")
setTimeout(()=>{
    console.log("2")
},1000);
console.log("3")*/

/*console.log("start")
setTimeout(()=>{
    console.log("dealay in seconds");
},2000);
console.log("end")*/

/*function getData(){
    console.log("my name is");
    setTimeout(()=>{
        console.log("marseena")
    },4000);
}
console.log("1");
getData();
console.log("2");*/

/*console.log("hellooo")
  setTimeout(()=>{
     console.log("hibah");
},1000);
  setTimeout(()=>{
     console.log("mehrin");
},1000);
  setTimeout(()=>{
     console.log("shanu")
},1000);
  console.log("bye");*/

/*setTimeout(() => {
  console.log("1");
  setTimeout(() => {
    console.log("2");
    setTimeout(() => {
      console.log("3");
    }, 1000);
  }, 1000);
}, 1000);*/


// function greet(){
//     setTimeout(()=>{
//         console.log("1");
//         console.log("2");
//         console.log("3");
//     },1000);
// }
// greet();

/*function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function showNumbers() {
            console.log("new working")

    await wait(1000);
    console.log("1");
  
    await wait(1000);
    console.log("2");
  
    await wait(1000);
    console.log("3");
        console.log("how to work")

  }
  
  showNumbers();
    console.log("not waiting")*/


/* function waiting(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
 }
 async function taskOne() {
    await waiting(2000);
    console.log("my name"); 
 }
 async function taskTwo() {
    console.log("what happend here")
    await waiting(2000);
    console.log("marseena");
 }
 taskOne();
 taskTwo();*/

 function greet(ms){
    return new Promise(resolve=>setTimeout(resolve,ms));
 }
 async function greeting(){
    await greet (1000)
    console.log("welcome to kerala")

    await greet (1000);
    console.log("gods on country")
 }
 greeting();


 

