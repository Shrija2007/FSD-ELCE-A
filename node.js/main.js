console.log("Hello, World!");

for(let i=0; i<10; i++){
    console.log("end");
}

console.log("async start");

setTimeout(() => {
    console.log("setTimeout");
}, 2000);

console.log("Async End");