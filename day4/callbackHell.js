//Call back hell:- call back hell is a problem in asynchronous javascript wher you use too many nested function 
//(callback inside callback)
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

// function greet(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
//  }
//  async function greeting(){
//     await greet (1000)
//     console.log("welcome to kerala")

//     await greet (1000);
//     console.log("gods on country")
//  }
//  greeting();


 function makeTea(callback){
   setTimeout(()=>{
      console.log("take 2 glass water")
      callback()
   },1000);
 }
 function takeGlass(callback){
   setTimeout(()=>{
      console.log("tea ready to serve")
         callback()
   },2000);
 }
 makeTea(()=>{
     takeGlass(()=>{
        console.log("ready");
     })
 })

 

