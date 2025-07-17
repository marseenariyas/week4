fetch('https://api.example.com/data')
.then(resolve=>response.json())
.then(data=>{
    console.log(data);
})
.catch(error=>{
    console.log("Error",error);
});