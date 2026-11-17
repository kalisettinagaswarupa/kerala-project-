settimeout(()=>{
    console.log("A")
},0)
Promise.resolve().then()=console.log("promise resolved")
console.log("call stack")