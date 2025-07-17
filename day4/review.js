// Fake Server Function
// A function simulates sending data to a server.
// It waits 1 second, then says “Events sent”.

let promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Event sent");
        resolve("done");
    },1000);
})
.then(msg=>console.log("event completed",msg));

// . Async/Await Version
// Uses modern async/await to wait for the "server" to respond.
// When it finishes, it shows "Events sent".

async function server() {
    try{
        const result= await sendToserver();
        console.log(result);
    } catch(error){
        console.error(error);
    }

    server();
}

// 4. Debounce Sending to Server (Wait 3 Seconds of Inactivity)
// The send to server function waits until the user is inactive for 3 seconds.
// Every time a new event is logged, the timer resets.
// This prevents the app from sending data too often.

function debounce(func,delay){
    let timeoutId;
    return function(){
        clearTimeout(timeoutId);
        timeoutId=setTimeout(()=>{
            func();
        },delay,3000);
    };
}

