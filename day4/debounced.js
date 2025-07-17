function debounce(func,delay){
    let timer;
    return ()=>{
        clearTimeout(timer);
        timer=setTimeout(()=>{
            func();
        },delay);
    }
}


function throttle(func,delay){
    let throttled= false;
    return function(...arg){
        if(!throttled){
            func.apply(this,arg);
            throttled=true;
            setTimeout(()=>{
                throttled=false
            },delay);
        }
    };
}

function throttle() {
   let inThrottle=false;
   return function(...arg){
    if(! inThrottle){
        func,apply(this,arg);
        inThrottle=true;
        setTimeout(()=>{
            inThrottle=false
        },delay);

    }
   } ;
}

function cookRice(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("rice cooked");
        },3000);
    })
}
async function makeLunch() {
    const result=await cookRice();
    console.log(result);
}
makeLunch();