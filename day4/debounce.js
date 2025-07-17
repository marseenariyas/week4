//Debounce:-is a technique used to limit how often a function gets called.it waits for the user to stop 
//triggering an action (like typing or clicking)then it runs the functions only once after a delay
//why use it? some events like : key up (typing in input box) resize(window resizing) Scroll
// can trigger many times in a short time.if you call a function every time,itcan overload your app.

function Debounce(func,dely){
    let timeoutId;
    return function(...arg){
        clearTimeout(timeoutId);
        timeoutId=setTimeout(()=>{
            func.apply(this,arg);
        },dealy);
    };
}
function greet(name){
    console.log("hellooo"+name);
}

function handleInput(event){
    console.log("searching for:",event.target.value);
}
const debouncedInput=Debounce(handleInput,500);
document.getElementById("search Box").addEventListener("input",debouncedInput);